module.exports = [
"[project]/.next-internal/server/app/api/products/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/products.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS_DB",
    ()=>PRODUCTS_DB
]);
const PRODUCTS_DB = [
    {
        id: 1,
        title: "Sourdough Bread",
        shortDescription: "Freshly baked artisan sourdough.",
        fullDescription: "Our sourdough bread is made using natural fermentation, giving it a rich tangy flavor and chewy crust. Baked daily with organic flour.",
        price: 4.99,
        image: "/images/products/product-img-1.png",
        image1: "/images/products/product-img-1.jpg",
        category: "bread"
    },
    {
        id: 2,
        title: "Chocolate Croissant",
        shortDescription: "Flaky butter croissant with chocolate.",
        fullDescription: "A classic French pastry with layers of buttery dough filled with rich dark chocolate. Perfect for breakfast or a sweet snack.",
        price: 2.5,
        image: "/images/products/product-img-2.png",
        image1: "/images/products/product-img-2.jpg",
        category: "pastry"
    },
    {
        id: 3,
        title: "Blueberry Muffin",
        shortDescription: "Soft muffin with fresh blueberries.",
        fullDescription: "Moist and fluffy muffin bursting with sweet blueberries. Made with whole wheat flour and topped with a light sugar crust.",
        price: 2.25,
        image: "/images/products/product-img-3.png",
        image1: "/images/products/product-img-3.jpg",
        category: "pastry"
    },
    {
        id: 4,
        title: "Cinnamon Roll",
        shortDescription: "Sweet roll with cinnamon glaze.",
        fullDescription: "Soft dough swirled with cinnamon sugar, topped with creamy vanilla glaze. A comforting classic for any time of the day.",
        price: 3.0,
        image: "/images/products/product-img-4.png",
        image1: "/images/products/product-img-4.jpg",
        category: "pastry"
    },
    {
        id: 5,
        title: "French Baguette",
        shortDescription: "Crispy crust, soft interior.",
        fullDescription: "Traditional French baguette baked fresh daily. Crispy golden crust with a light and airy interior. Ideal for sandwiches or dipping.",
        price: 3.5,
        image: "/images/products/product-img-5.png",
        image1: "/images/products/product-img-5.jpg",
        category: "bread"
    },
    {
        id: 6,
        title: "Gluten-Free Brownie",
        shortDescription: "Rich chocolate gluten-free brownie.",
        fullDescription: "A fudgy, rich chocolate brownie made with almond flour. Gluten-free, but just as indulgent as the classic version.",
        price: 2.99,
        image: "/images/products/product-img-6.png",
        image1: "/images/products/product-img-6.jpg",
        category: "cake"
    },
    {
        id: 7,
        title: "Almond Croissant",
        shortDescription: "Croissant filled with almond cream.",
        fullDescription: "Buttery croissant filled with homemade almond cream, topped with sliced almonds and powdered sugar.",
        price: 3.25,
        image: "/images/products/product-img-6.png",
        image1: "/images/products/product-img-7.jpg",
        category: "pastry"
    },
    {
        id: 8,
        title: "Banana Bread",
        shortDescription: "Moist banana loaf with walnuts.",
        fullDescription: "Classic banana bread baked with ripe bananas and crunchy walnuts. Perfect as a snack or breakfast treat.",
        price: 5.0,
        image: "/images/products/product-img-8.png",
        image1: "/images/products/product-img-8.jpg",
        category: "bread"
    },
    {
        id: 9,
        title: "Macarons Box (6 pcs)",
        shortDescription: "Assorted French macarons.",
        fullDescription: "Colorful box of 6 handmade French macarons with assorted flavors: pistachio, raspberry, vanilla, chocolate, lemon, and coffee.",
        price: 12.99,
        image: "/images/products/product-img-9.png",
        image1: "/images/products/product-img-9.jpg",
        category: "specialty"
    },
    {
        id: 10,
        title: "Cheesecake Slice",
        shortDescription: "Classic New York cheesecake.",
        fullDescription: "Creamy New York-style cheesecake on a buttery graham cracker crust. Rich, smooth, and perfectly sweet.",
        price: 4.75,
        image: "/images/products/product-img-10.png",
        image1: "/images/products/product-img-10.jpg",
        category: "cake"
    },
    {
        id: 11,
        title: "Carrot Cake",
        shortDescription: "Spiced cake with cream cheese frosting.",
        fullDescription: "Moist carrot cake layered with cinnamon, walnuts, and topped with smooth cream cheese frosting.",
        price: 6.5,
        image: "/images/products/product-img-11.png",
        image1: "/images/products/product-img-11.jpg",
        category: "cake"
    },
    {
        id: 12,
        title: "Cupcake Box (4 pcs)",
        shortDescription: "Assorted frosted cupcakes.",
        fullDescription: "Box of 4 assorted cupcakes with flavors including chocolate, vanilla, red velvet, and cookies & cream. Topped with creamy frosting.",
        price: 9.99,
        image: "/images/products/product-img-12.png",
        image1: "/images/products/product-img-12.jpg",
        category: "cake"
    },
    {
        id: 13,
        title: "Apple Pie Slice",
        shortDescription: "Classic cinnamon apple pie.",
        fullDescription: "Homemade apple pie with spiced apple filling and a golden flaky crust. Served by the slice.",
        price: 3.99,
        image: "/images/products/product-img-13.png",
        image1: "/images/products/product-img-13.jpg",
        category: "cake"
    },
    {
        id: 14,
        title: "Strawberry Tart",
        shortDescription: "Fresh tart with strawberries.",
        fullDescription: "Crisp tart shell filled with pastry cream and topped with fresh strawberries and a light glaze.",
        price: 4.25,
        image: "/images/products/product-img-14.png",
        image1: "/images/products/product-img-14.jpg",
        category: "pastry"
    },
    {
        id: 15,
        title: "Chocolate Cake",
        shortDescription: "Rich layered chocolate cake.",
        fullDescription: "Decadent chocolate sponge layered with chocolate ganache and frosted with silky chocolate buttercream.",
        price: 18.0,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-15.jpg",
        category: "cake"
    },
    {
        id: 16,
        title: "Oatmeal Raisin Cookies",
        shortDescription: "Chewy cookies with oats & raisins.",
        fullDescription: "Classic chewy oatmeal cookies loaded with sweet raisins and a hint of cinnamon. Baked fresh daily.",
        price: 3.5,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-16.jpg",
        category: "cookie"
    },
    {
        id: 17,
        title: "Pretzel",
        shortDescription: "Soft salted pretzel.",
        fullDescription: "Freshly baked soft pretzel with a golden crust, lightly salted. Perfect with mustard or cheese dip.",
        price: 2.25,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-17.jpg",
        category: "bread"
    },
    {
        id: 18,
        title: "Gluten-Free Cupcake",
        shortDescription: "Vanilla cupcake without gluten.",
        fullDescription: "Moist vanilla cupcake topped with buttercream frosting. 100% gluten-free and baked with almond flour.",
        price: 2.99,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-18.jpg",
        category: "cake"
    },
    {
        id: 19,
        title: "Pumpkin Pie Slice",
        shortDescription: "Spiced seasonal pumpkin pie.",
        fullDescription: "Creamy pumpkin filling baked in a flaky crust, flavored with cinnamon, nutmeg, and cloves. A fall favorite.",
        price: 4.25,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-19.jpg",
        category: "cake"
    },
    {
        id: 20,
        title: "Chocolate Chip Cookies (6 pcs)",
        shortDescription: "Classic cookies with chocolate chips.",
        fullDescription: "A box of 6 freshly baked chocolate chip cookies, crispy on the edges and chewy in the center.",
        price: 5.5,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-20.jpg",
        category: "cookie"
    },
    {
        id: 21,
        title: "Multigrain Bread",
        shortDescription: "Healthy bread with seeds.",
        fullDescription: "Wholesome bread baked with a mix of whole grains and seeds. High in fiber, soft inside with a hearty crust.",
        price: 5.25,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-21.jpg",
        category: "bread"
    },
    {
        id: 22,
        title: "Eclairs",
        shortDescription: "Pastry filled with cream.",
        fullDescription: "Delicate pastry shells filled with vanilla custard and topped with rich chocolate glaze. Sold individually.",
        price: 3.75,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-22.jpg",
        category: "pastry"
    },
    {
        id: 23,
        title: "Red Velvet Cake Slice",
        shortDescription: "Moist red velvet with cream cheese.",
        fullDescription: "Classic red velvet cake slice layered with smooth cream cheese frosting. Elegant and indulgent.",
        price: 5.0,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-23.jpg",
        category: "cake"
    },
    {
        id: 24,
        title: "Baklava",
        shortDescription: "Sweet layered pastry with nuts.",
        fullDescription: "Traditional Middle Eastern dessert made of layers of filo pastry, walnuts, and honey syrup.",
        price: 6.25,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-24.jpg",
        category: "specialty"
    },
    {
        id: 25,
        title: "Donut Assortment (4 pcs)",
        shortDescription: "Box of assorted donuts.",
        fullDescription: "A pack of 4 assorted donuts with flavors including glazed, chocolate, strawberry sprinkle, and filled jelly.",
        price: 7.5,
        image: "/images/products/product-img-15.png",
        image1: "/images/products/product-img-25.jpg",
        category: "pastry"
    }
];
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function GET() {
    const list = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRODUCTS_DB"].map((p)=>({
            id: p.id,
            title: p.title,
            shortDescription: p.shortDescription,
            fullDescription: p.fullDescription,
            price: p.price,
            image: p.image,
            image1: p.image1,
            category: p.category
        }));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(list);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd151c6a._.js.map