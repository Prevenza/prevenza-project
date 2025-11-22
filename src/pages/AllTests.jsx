import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const DUMMY_DATA = [
  { id: 1, name: "Full Wellness Package", type: "package", category: "Comprehensive", price: 120, sample: "Blood" },
  { id: 2, name: "Diabetes Test", type: "single", category: "Metabolic", price: 18, sample: "Blood" },
  { id: 3, name: "Liver Function Panel", type: "single", category: "Liver", price: 35, sample: "Blood" },
  { id: 4, name: "Cardiac Health Package", type: "package", category: "Cardiac", price: 150, sample: "Blood" },
  { id: 5, name: "Thyroid Screening", type: "single", category: "Endocrine", price: 22, sample: "Blood" },
  { id: 6, name: "Vitamin D Test", type: "single", category: "Vitamin", price: 25, sample: "Blood" },
  { id: 7, name: "Women Wellness Pack", type: "package", category: "Women", price: 99, sample: "Urine" },
  { id: 8, name: "Cholesterol Test", type: "single", category: "Cardiac", price: 20, sample: "Blood" },
];

const CATEGORIES = ["All", "Comprehensive", "Cardiac", "Liver", "Metabolic", "Endocrine", "Vitamin", "Women"];

export default function AllTests() {
  // main filter: 'all' | 'package' | 'single'
  const [mainFilter, setMainFilter] = useState("all");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  // subfilters example: sample type (Blood / Urine) and price range (under50)
  const [subfilters, setSubfilters] = useState({
    blood: false,
    urine: false,
    under50: false,
  });

  // pagination
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 4;

  // email subscribe
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Toggle subfilters helper
  function toggleSubfilter(key) {
    setSubfilters((s) => ({ ...s, [key]: !s[key] }));
    setPage(1);
  }

  // Combined filtered data
  const filtered = useMemo(() => {
    let list = DUMMY_DATA.slice();

    // main filter (type)
    if (mainFilter === "package") {
      list = list.filter((i) => i.type === "package");
    } else if (mainFilter === "single") {
      list = list.filter((i) => i.type === "single");
    }

    // category filter
    if (category !== "All") {
      list = list.filter((i) => i.category === category);
    }

    // subfilters
    if (subfilters.blood && !subfilters.urine) {
      list = list.filter((i) => i.sample.toLowerCase() === "blood");
    } else if (subfilters.urine && !subfilters.blood) {
      list = list.filter((i) => i.sample.toLowerCase() === "urine");
    }
    if (subfilters.under50) {
      list = list.filter((i) => i.price < 50);
    }

    // search (after the first two filters per your flow)
    // You mentioned the search appears after first two filters; logic here always allows search but you can conditionally render search UI.
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          String(i.price).includes(q)
      );
    }

    return list;
  }, [mainFilter, category, subfilters, search]);

  // pagination helpers
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  function goToPage(n) {
    setPage(Math.max(1, Math.min(totalPages, n)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubscribe(e) {
    e.preventDefault();
    setEmailError("");
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
  }

  const { addToCart } = useCart();

  const handleAdd = (item) => {
    addToCart(item);
    toast.success("Added to Cart");
  };

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold flex justify-center">All Tests & Packages</h1>
          <p className="text-sm text-gray-600 flex justify-center">Filter and find the tests you need.</p>
        </div>

        {/* Filters Row */}
        <div className="bg-white border border-gray-400 rounded-lg p-4 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
            {/* Main filter 1 */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Main Filter</label>
              <div className="flex gap-2">
                <button
                  onClick={() => { setMainFilter("all"); setPage(1); }}
                  className={`px-3 py-2 rounded-md border border-gray-500 ${mainFilter === "all" ? "bg-[#8116b4] text-white" : "bg-white text-gray-700"}`}
                >
                  All
                </button>
                <button
                  onClick={() => { setMainFilter("package"); setPage(1); }}
                  className={`px-3 py-2 rounded-md border border-gray-500 ${mainFilter === "package" ? "bg-[#8116b4] text-white" : "bg-white text-gray-700"}`}
                >
                  Health Packages
                </button>
                <button
                  onClick={() => { setMainFilter("single"); setPage(1); }}
                  className={`px-3 py-2 rounded-md border border-gray-500 ${mainFilter === "single" ? "bg-[#8116b4] text-white" : "bg-white text-gray-700"}`}
                >
                  Single Tests
                </button>
              </div>
            </div>

            {/* Secondary select */}
            <div className="w-full md:w-60">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                className="w-full rounded-md border border-gray-500 px-3 py-2 bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Search - appears visually after first two filters in your spec */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search tests, categories or price..."
                className="w-full rounded-md border border-gray-500 px-3 py-2"
                aria-label="Search tests"
              />
            </div>
          </div>

          {/* Sub-filters (below search) */}
          <div className="mt-4 border-t border-gray-500 pt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">More filters</p>
            <div className="flex flex-wrap gap-4 items-center">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={subfilters.blood} onChange={() => toggleSubfilter("blood")} />
                Blood sample
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={subfilters.urine} onChange={() => toggleSubfilter("urine")} />
                Urine sample
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={subfilters.under50} onChange={() => toggleSubfilter("under50")} />
                Price under $50
              </label>

              <div className="ml-auto text-sm text-gray-600">
                <span className="font-medium">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-400 rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium">Test / Package</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Type</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Category</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                    No tests match your filters.
                  </td>
                </tr>
              ) : (
                paginated.map((row) => (
                  <tr key={row.id} className="border-t border-gray-400 hover:bg-gray-50">
                    <td className="px-4 py-4">{row.name}</td>
                    <td className="px-4 py-4 capitalize">{row.type}</td>
                    <td className="px-4 py-4">{row.category}</td>
                    <td className="px-4 py-4 flex items-center justify-between gap-3">
                      <span>${row.price}</span>

                      <button
                        onClick={() => handleAdd(row)}
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>

                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-600">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{(page - 1) * PAGE_SIZE + (paginated.length ? 1 : 0)}</span> to{" "}
              <span className="font-medium">{(page - 1) * PAGE_SIZE + paginated.length}</span> of <span className="font-medium">{filtered.length}</span> results
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 rounded-md border disabled:opacity-50"
              >
                Prev
              </button>

              {/* page numbers: show up to 5 pages for small dataset */}
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const n = i + 1;
                  return (
                    <button
                      key={n}
                      onClick={() => goToPage(n)}
                      className={`px-3 py-1 rounded-md border ${n === page ? "bg-[#8116b4] text-white" : "bg-white"}`}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1 rounded-md border disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="mt-6 bg-[#F5F7FA] border border-gray-400 rounded-lg p-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Subscribe for updates & offers</h3>
            <p className="text-sm text-gray-600">Get health tips and discounts straight to your inbox.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="px-3 py-2 rounded-md border border-gray-400 w-full md:w-72"
              aria-label="Email address"
            />
            <button type="submit" className="px-4 py-2 rounded-md bg-[#8116b4] text-white">
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>

        {emailError && (
          <p className="text-sm text-red-600 mt-2">
            {emailError}
          </p>
        )}

        {subscribed && (
          <p className="text-sm text-green-700 mt-2">Thanks — you've been subscribed.</p>
        )}
      </main>
    </>
  );
}