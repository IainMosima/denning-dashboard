"use client"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface LibraryCategoriesProps {
  activeCategory: string | null
  onCategorySelect: (category: string | null) => void
}

const categories = [
  {
    id: "case-law",
    name: "Case Law",
    count: 2458,
    subcategories: [
      { id: "supreme-court", name: "Supreme Court", count: 542 },
      { id: "appellate-courts", name: "Appellate Courts", count: 876 },
      { id: "district-courts", name: "District Courts", count: 1040 },
    ],
  },
  {
    id: "statutes",
    name: "Statutes & Regulations",
    count: 1876,
    subcategories: [
      { id: "federal", name: "Federal", count: 734 },
      { id: "state", name: "State", count: 1142 },
    ],
  },
  {
    id: "legal-articles",
    name: "Legal Articles",
    count: 943,
    subcategories: [
      { id: "journals", name: "Law Journals", count: 456 },
      { id: "reviews", name: "Law Reviews", count: 487 },
    ],
  },
  {
    id: "precedents",
    name: "Precedents & Templates",
    count: 682,
    subcategories: [
      { id: "contracts", name: "Contracts", count: 245 },
      { id: "pleadings", name: "Pleadings", count: 198 },
      { id: "motions", name: "Motions", count: 239 },
    ],
  },
  {
    id: "practice-guides",
    name: "Practice Guides",
    count: 374,
    subcategories: [
      { id: "litigation", name: "Litigation", count: 128 },
      { id: "corporate", name: "Corporate", count: 97 },
      { id: "real-estate", name: "Real Estate", count: 85 },
      { id: "ip", name: "Intellectual Property", count: 64 },
    ],
  },
]

export default function LibraryCategories({ activeCategory, onCategorySelect }: LibraryCategoriesProps) {
  return (
    <div className="space-y-1">
      <div
        className={cn(
          "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-accent",
          !activeCategory && "bg-accent",
        )}
        onClick={() => onCategorySelect(null)}
      >
        <span className="font-medium">All Resources</span>
        <span className="text-sm text-muted-foreground">{categories.reduce((acc, cat) => acc + cat.count, 0)}</span>
      </div>

      {categories.map((category) => (
        <div key={category.id} className="space-y-1">
          <div
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-accent",
              activeCategory === category.id && "bg-accent",
            )}
            onClick={() => onCategorySelect(category.id)}
          >
            <span className="font-medium">{category.name}</span>
            <span className="text-sm text-muted-foreground">{category.count}</span>
          </div>

          {activeCategory === category.id && (
            <div className="ml-4 space-y-1 border-l border-border pl-2">
              {category.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center justify-between px-3 py-1.5 rounded-md cursor-pointer hover:bg-accent"
                  onClick={() => onCategorySelect(`${category.id}-${sub.id}`)}
                >
                  <div className="flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1 text-muted-foreground" />
                    <span>{sub.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{sub.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
