import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import ShoppingBag from "@modules/common/icons/shopping-bag"

export default async function Header() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
            <div className="content-container h-16 flex items-center justify-between">
              <LocalizedClientLink href="/" className="text-2xl font-bold tracking-tighter hover:text-ui-fg-base">
                YEEZY
              </LocalizedClientLink>
              <div className="flex items-center">
                {/* <LocalizedClientLink href="/account" className="w-12 h-12 flex items-center justify-center hover:text-gray-600">
                  <Account size={24} />
                </LocalizedClientLink> */}
                <Suspense fallback={
                  <div className="w-12 h-12 flex items-center justify-center">
                    <ShoppingBag size={24} />
                  </div>
                }>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <CartButton />
                  </div>
                </Suspense>
              </div>
            </div>
          </header>
    </div>
  )
}
