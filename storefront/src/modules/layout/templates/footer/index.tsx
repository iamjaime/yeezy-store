import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="bg-black text-white py-16">
            <div className="content-container">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">YEEZY</h3>
                  <p className="text-gray-400">Modern fashion redefined.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-4">Shop</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-4">Help</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
  )
}
