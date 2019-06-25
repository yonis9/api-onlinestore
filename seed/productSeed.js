const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123321@onlineshop-teodb.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true } );


const products = [
    new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/BO_G_OM_01_1_1024x1024.jpg?v=1554131336',
    name: 'OLD MONEY BEARD OIL',
    type: 'Beard Oil',
    description: `This Beard Oil was cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    Breathe deep - that's the smell of Old Money. With notes of aged oak, black pepper, and amber, this is a rich and complex scent that evolves as it's worn throughout the day, and is our most potent scent blend. It's a fragrance that is at home surrounded by rich mahogany, your favorite worn leather chair, a glass of whiskey, and a cigar.
    To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 40
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/BO_G_TS_01_1_1024x1024.jpg?v=1554131608',
    name: 'TEMPLE SMOKE BEARD OIL',
    type: 'Beard Oil',
    description: `This Beard Oil was cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    Temple Smoke is a mystical blend inspired by the rich fragrance of oud incense. It has deep and warm layers with an earthy, smoky undertone. The complementary notes of frankincense and myrrh create a rich, and long lasting blend. This sweet and smoky scent profile evokes the feeling of a temple retreat.
    To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 40
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/BO_G_FV_01_1_1024x1024.jpg?v=1554132156',
    name: 'FOUR VICES BEARD OILL',
    type: 'Beard Oil',
    description: `This Beard Oil was cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    Who knew that sin could smell so good? We meticulously blended together the four unique scents of tobacco, coffee, hops, and hemp cannabis to create the perfect blend that's rich and rugged. The earthy notes of coffee and tobacco pair perfectly with the bitter, floral notes of the hemp cannabis and hops.
    To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 40
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TreeRangerBeardOil_1_4db31e72-16b8-4c1d-8e6e-b48d686eec8d_1024x1024.jpg?v=1554132617',
    name: 'TREE RANGER BEARD OIL',
    type: 'Beard Oil',
    description: `This Beard Oil was cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    Tree Ranger is a potent eucalyptus blend that will have you smelling like you just hiked through a Pacific Northwest forest. In fact, people may be wondering why your face was hugging a tree. You shouldn't leave for your next camping trip, or anywhere for that matter, without this blend in your bag.
    To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 25
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/SpicedCitrusBeardOil_1_1024x1024.jpg?v=1554131946',
    name: 'SPICED CITRUS BEARD OIL',
    type: 'Beard Oil',
    description: `This Beard Oil was cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    Spiced Citrus is a scent with universal appeal that's warm and complex. The unique blend of clove, vanilla, and spice work in harmony to build the perfect aroma. Think of the warm and comforting fragrance of the holidays at home, all year round.
    To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 25
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TeaTreeBeardOil_1_1024x1024.jpg?v=1554131853',
    name: 'TEA TREE BEARD OILL',
    type: 'Beard Oil',
    description: `This Beard Oil was cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    Tea Tree is a crisp, fresh blend that inspires adventures. Imagine taking a step outside into the brisk morning air in the mountains. With notes of vanilla and peppermint, it's the perfect refreshing scent to wear anytime.
    To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 25
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GoldLineBeardOil_1_1024x1024.jpg?v=1554130775',
    name: 'GOLD LINE BEARD OIL COLLECTION',
    type: 'Beard Oil',
    description: `Our Beard Oils were cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy.
    So, maybe you are a little indecisive and can't decide on which scent to go with. Well, we'll help you out a bit by giving a $10 discount and sending you all three. Now depending on your mood you are going to have the right scent for your epic beard. To use, shake 3-4 drops in your hand and work the oil into your beard and skin.`,
    price: 110
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/SilverLineBeardOil_1_1024x1024.jpg?v=1554131282',
    name: 'SILVER LINE BEARD OIL COLLECTION',
    type: 'Beard Oil',
    description: `Our Beard Oils were cultivated after months of research and is made with only the finest natural blends of oils. Simply put, it is the best Beard Oil on the market. The Beardbrand Beard Oil is designed to be very lightweight and will help keep beard hair conditioned and shiny. Because it's a lightweight blend, it won't weigh down your beard or feel greasy. To use, shake 3-4 drops in your hand and work the oil into your beard and skin.
    So, maybe you are a little indecisive and can't decide on which scent to go with. Well, we'll help you out a bit by giving a $10 discount and by sending you all three. Now depending on your mood you are going to have the right scent for your epic beard`,
    price: 70
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TRub_1024x1024.jpg?v=1530629379',
    name: 'TREE RANGER UTILITY BALM',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Silver Line Utility Balm is a deeply hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
                  Tree Ranger is a potent eucalyptus blend that will have you smelling like you just hiked through a Pacific Northwest forest. In fact, people may be wondering why your face was hugging a tree. You shouldn't leave for your next camping trip, or anywhere for that matter, without this blend in your bag.
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 28
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/SpicedCitrusUtilityBalm_1_1024x1024.jpg?v=1554131697',
    name: 'SPICED CITRUS UTILITY BALM',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Silver Line Utility Balm is a deeply hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
                  Spiced Citrus is a scent with universal appeal that's warm and complex. The unique blend of clove, vanilla, and spice work in harmony to build the perfect aroma. Think of the warm and comforting fragrance of the holidays at home, all year round.
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 28
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TTubBLANK_1024x1024.jpg?v=1530893789',
    name: 'TEA TREE UTILITY BALM',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Silver Line Utility Balm is a deeply hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
    Tea Tree is a crisp, fresh blend that inspires adventures. Imagine taking a step outside into the brisk morning air in the mountains. With notes of vanilla and peppermint, it's the perfect refreshing scent to wear anytime.
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 28
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/OldMoneyUtilityBalm_1_1024x1024.jpg?v=1554131199',
    name: 'OLD MONEY UTILITY BALM',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Gold Line Utility Balm is a deep hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. Our This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
                 Breathe deep - that's the smell of Old Money. With notes of aged oak, black pepper, and amber, this is a rich and complex scent that evolves as its worn throughout the day, and is our most potent scent blend. It's a fragrance that is at home surrounded by rich mahogany, your favorite worn leather chair, a glass of whiskey, and a cigar.
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 37
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GLubtsFRONTblank_1024x1024.jpg?v=1520291758',
    name: 'TEMPLE SMOKE UTILITY BALM',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Gold Line Utility Balm is a deep hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. Our This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
    Temple Smoke is a mystical blend inspired by the rich fragrance of oud incense. It has deep and warm layers with an earthy, smoky undertone. The complementary notes of frankincense and myrrh create a rich, and long lasting blend. This sweet and smoky scent profile evokes the feeling of a temple retreat.
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 37
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/FourVicesUtilityBalm_1_1024x1024.jpg?v=1554130676',
    name: 'FOUR VICES UTILITY BALM',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Gold Line Utility Balm is a deep hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. Our This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
    Who knew that sin could smell so good? We meticulously blended together the four unique scents of tobacco, coffee, hops, and hemp cannabis to create the perfect blend that's rich and rugged. The earthy notes of coffee and tobacco pair perfectly with the bitter, floral notes of the hemp cannabis and hops.
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 37
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/SilverLineUtilityBalm_1_c33b916a-affa-40e6-bff1-39179c2cbc5e_1024x1024.jpg?v=1554131999',
    name: 'SILVER LINE UTILITY BALM COLLECTION',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Gold Line Utility Balm is a deep hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. Our This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 78
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GoldLineUtilityBalm_1_1024x1024.jpg?v=1554130819',
    name: 'GOLD LINE UTILITY BALM COLLECTION',
    type: 'Beard Balm',
    description: `Keep it healthy from the beard to the body. Made from all-natural ingredients and naturally derived fragrances, our Gold Line Utility Balm is a deep hydrating balm that is perfect for keeping your beard, hair, and skin moisturized. Our This all-in-one Utility Balm features base ingredients like mango butter, lanolin, and jojoba oil, as well as shea butter (which is rich in vitamins and renowned for its anti-aging properties), and cocoa butter (which contains a number of antioxidants and is known to improve skin health and elasticity).
                  A little goes a long way, so always start with a smaller amount than you think you'll need and build from there. Use this to keep hair healthy and soft, to alleviate dry skin on hands, and even to keep tattoos moisturized and vibrant - any way you choose to use it, you'll be giving your beard and body the absolute best.`,
    price: 101
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TreeRangerBeardWash_1_1024x1024.jpg?v=1554127597',
    name: 'TREE RANGER BEARD WASH',
    type: 'Beard Wash & Softener',
    description: `Beardbrand has perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hairs. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of Beardbrand's washes is that they are designed to match the fragrance line of any other products we carry. 
    Tree Ranger is a potent blend of eucalyptus that will have you smelling like you just hiked through a Pacific Northwest forest. In fact, people may be wondering why your face was hugging a tree. You shouldn't leave for your next camping trip, or anywhere for that matter, without this blend in your bag.`,
    price: 17
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TreeRangerBeardSoftener_1_1024x1024.jpg?v=1554127639',
    name: 'TREE RANGER BEARD SOFTENER',
    type: 'Beard Wash & Softener',
    description: `Beardbrand has perfected the finest Beard Softener around. This stuff was designed from the ground up specifically for beards. Like our Beard Wash, this amazing product is silicone, sulfate and paraben free. It was designed to be similar to a hair conditioner to gradually soften facial hair over time. We recommend applying Beard Softener once or twice a week, but it can be used daily if needed. Use Beard Softener after cleansing with Beard Wash in the matching scent; Beardbrand's Softeners are designed to match the fragrance line of complimentary products.
    Beardbrand's softeners are designed to match the fragrance line of any other products we carry. 
    Tree Ranger is a potent blend of eucalyptus that will have you smelling like you just hiked through a Pacific Northwest forest. In fact, people may be wondering why your face was hugging a tree. You shouldn't leave for your next camping trip, or anywhere for that matter, without this blend in your bag.`,
    price: 17
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/SpicedCitrusBeardWash_1_1024x1024.jpg?v=1554128550',
    name: 'SPICED CITRUS BEARD WASH',
    type: 'Beard Wash & Softener',
    description: `Beardbrand has perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hairs. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of our Beard Washes is that they are designed to match the fragrance line of any other products we carry. 
    Spiced Citrus is a scent with universal appeal that's warm and complex. The unique blend of clove, vanilla, and spices works in harmony to build the perfect aroma. Think of the warm and comforting fragrance of the holidays at home, all year round.`,
    price: 17
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/SpicedCitrusBeardSoftener_1_1024x1024.jpg?v=1554128162',
    name: 'SPICED CITRUS BEARD SOFTENER',
    type: 'Beard Wash & Softener',
    description: `Beardbrand has perfected the finest Beard Softener around. This stuff was designed from the ground up specifically for beards. Like our Beard Wash, this amazing product is silicone, sulfate and paraben free. It was designed to be similar to a hair conditioner to gradually soften facial hair over time. We recommend applying Beard Softener once or twice a week, but it can be used daily if needed. Use Beard Softener after cleansing with Beard Wash in the matching scent; Beardbrand's Softeners are designed to match the fragrance line of complimentary products.
    A great advantage of Beardbrand's washes is that they are designed to match the fragrance line of any other products we carry. 
    Spiced Citrus is a scent with universal appeal that's warm and complex. The unique blend of clove, vanilla, and spices works in harmony to build the perfect aroma. Think of the warm and comforting fragrance of the holidays at home, all year round.`,
    price: 17
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TeaTreeBeardWash_1_1024x1024.jpg?v=1554127756',
    name: 'TEA TREE BEARD WASH',
    type: 'Beard Wash & Softener',
    description: `Beardbrand has perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hairs. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of Beardbrand's washes is that they are designed to match the fragrance line of any other products we carry. 
    Tea Tree is our crisp, fresh blend that inspires adventures. Imagine taking a step outside into the brisk morning air in the mountains. A very cool, clean, and crisp scent that you can wear anytime of day.`,
    price: 17
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TeaTreeBeardSoftener_1_1024x1024.jpg?v=1554127833',
    name: 'TEA TREE BEARD SOFTENER',
    type: 'Beard Wash & Softener',
    description: `Beardbrand has perfected the finest Beard Softener around. This stuff was designed from the ground up specifically for beards. Like our Beard Wash, this amazing product is silicone, sulfate and paraben free. It was designed to be similar to a hair conditioner to gradually soften facial hair over time. We recommend applying Beard Softener once or twice a week, but it can be used daily if needed. Use Beard Softener after cleansing with Beard Wash in the matching scent; Beardbrand's Softeners are designed to match the fragrance line of complimentary products.
    Beardbrand's softeners are designed to match the fragrance line of any other products we carry. 
    Tea Tree is our crisp, fresh blend that inspires adventures. Imagine taking a step outside into the brisk morning air in the mountains. A very cool, clean, and crisp scent that you can wear anytime of day.`,
    price: 17
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/OldMoneyBeardWash_1_1024x1024.jpg?v=1554128285',
    name: 'OLD MONEY BEARD WASH',
    type: 'Beard Wash & Softener',
    description: `We know we've perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hairs. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of Beardbrand's washes is that they are designed to match the fragrance line of any other products we carry. 
    Breathe deep - that's the smell of Old Money. With notes of aged oak, black pepper, and amber, this is a rich and complex scent that evolves as it's worn throughout the day, and is our most potent scent blend. It's a fragrance that is at home surrounded by rich mahogany, your favorite worn leather chair, a glass of whiskey, and a cigar.`,
    price: 23
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GL_Soft_OM_Front_1024x1024.jpg?v=1537210637',
    name: 'OLD MONEY BEARD SOFTENER',
    type: 'Beard Wash & Softener',
    description: `We know we've developed the best Beard Softener around – this stuff was designed from the ground up specifically for beards. Like our Beard Wash, this amazing product is silicone, sulfate, and paraben free. It was designed to be similar to a hair conditioner to gradually soften facial hair over time. We recommend applying Beard Softener once or twice a week, but it can be used daily if needed. Use Beard Softener after cleansing with Beard Wash in the matching scent; they are the perfect pair!
    Beardbrand's Softeners are designed to match the fragrance line of any other products we carry. 
    Breathe deep - that's the smell of Old Money. With notes of aged oak, black pepper, and amber, this is a rich and complex scent that evolves as it's worn throughout the day, and is our most potent scent blend. It's a fragrance that is at home surrounded by rich mahogany, your favorite worn leather chair, a glass of whiskey, and a cigar.`,
    price: 23
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GL_Wash_TS_Front_1024x1024.jpg?v=1537211462',
    name: 'TEMPLE SMOKE BEARD WASH',
    type: 'Beard Wash & Softener',
    description: `We know we've perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate, and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hair. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of Beardbrand's Washes are that they are designed to match the fragrance line of any other products we carry.
    Temple Smoke is a mystical blend inspired by the rich fragrance of oud incense. It has deep and warm layers with an earthy, smoky undertone. The complementary notes of frankincense and myrrh create a rich, and long lasting blend. This sweet and smoky scent profile evokes the feeling of a temple retreat.`,
    price: 23
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GL_Soft_TS_Front_1024x1024.jpg?v=1537211070',
    name: 'TEMPLE SMOKE BEARD SOFTENER',
    type: 'Beard Wash & Softener',
    description: `We know we've developed the best Beard Softener around – this stuff was designed from the ground up specifically for beards. Like our Beard Wash, this amazing product is silicone, sulfate, and paraben free. It was designed to be similar to a hair conditioner to gradually soften facial hair over time. We recommend applying Beard Softener once or twice a week, but it can be used daily if needed. Use Beard Softener after cleansing with Beard Wash in the matching scent; they are the perfect pair!
    Beardbrand's Softeners are designed to match the fragrance line of any other products we carry.
    Temple Smoke is a mystical blend inspired by the rich fragrance of oud incense. It has deep and warm layers with an earthy, smoky undertone. The complementary notes of frankincense and myrrh create a rich, and long lasting blend. This sweet and smoky scent profile evokes the feeling of a temple retreat.`,
    price: 23
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GL_Wash_FV_Front_1_1024x1024.jpg?v=1552335699',
    name: 'FOUR VICES BEARD WASH',
    type: 'Beard Wash & Softener',
    description: `We know we've perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate, and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hair. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of Beardbrand's Washes are that they are designed to match the fragrance line of any other products we carry.
    Who knew that sin could smell so good? We meticulously blended together the four unique scents of tobacco, coffee, hops, and hemp cannabis to create the perfect blend that's the rich and rugged scent of Four Vices. The earthy notes of coffee and tobacco pair perfectly with the bitter, floral notes of the hemp cannabis and hops.`,
    price: 23
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/GL_Soft_FV_Front_1_1024x1024.jpg?v=1552335212',
    name: 'FOUR VICES BEARD SOFTENER',
    type: 'Beard Wash & Softener',
    description: `We know we've perfected the finest Beard Wash around. This stuff was designed from the ground up specifically for beards. Like our Beard Softener, this amazing product is silicone, sulfate, and paraben free. This Beard Wash has a lather that is gentle enough for your face, yet tough enough to handle coarse, curly beard hair. We recommend applying the Beard Wash once or twice a week, but it can be used it daily if needed. Always follow up with a matching Beard Softener.
    A great advantage of Beardbrand's Washes are that they are designed to match the fragrance line of any other products we carry.
    Who knew that sin could smell so good? We meticulously blended together the four unique scents of tobacco, coffee, hops, and hemp cannabis to create the perfect blend that's the rich and rugged scent of Four Vices. The earthy notes of coffee and tobacco pair perfectly with the bitter, floral notes of the hemp cannabis and hops.`,
    price: 23
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/TB_02_1_1024x1024.jpg?v=1554133381',
    name: 'TRAVEL BRUSH',
    type: 'Grooming Tools',
    description: `Now it’s easy to take your grooming routine with you! Our new Travel Brush with 100% boar's hair bristles won’t take up space in your suitcase, but still provides the same benefits of its big brother, all while sporting a sleek wood handle.
    What makes boar's hair better than synthetic brushes? The surface of each bristle is scaly and draws dust and excess product from the hair as you use it. The bristles also stimulate the natural oils (sebum) present in the scalp, and draws them along the hair shafts, essential for keeping hair clean, healthy, shiny, and protected.
    To maximize the efficacy of your new brush, we recommend cleaning it every few uses. To clean, simply wash the bristles only (facedown in a bowl—to keep the wood dry) with light soapy water and rinse. For quick washes a simple rinse will work. Towel dry and allow the brush to air dry overnight.`,
    price: 22
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/C_Large_1_1_1024x1024.jpg?v=1554133207',
    name: 'LARGE BEARD COMB',
    type: 'Grooming Tools',
    description: `Our large beard comb was designed to glide through the beard and avoid snagging or breakage. We picked a cellulose-based acetate to match our desired specs and chose a high quality manufacturer in Switzerland to hand-craft them with care for us. The current limited edition acetate for this comb is called Classic Havana, which gives a classically modern update from the previous version.
    The comb design is cut out of the acetate sheet, shaping the comb. Then the edges are polished, the teeth are bevelled and cut, and the whole comb is polished and brushed. The teeth themselves are rounded with pumice. The result is a comb with smoothly-tapered teeth and rounded tips for more comfort.
    Lastly, it's hit with an acid vapor to add shine and tumbled for a last polish before the gold printing. A lot of energy went into the production of our combs and we couldn't be more proud!`,
    price: 20
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/Combs__standard_RiverRock_1_1024x1024.jpg?v=1554133286',
    name: 'POCKET BEARD COMB',
    type: 'Grooming Tools',
    description: `Our pocket beard comb was designed to glide through the beard and avoid snagging or breakage. We picked a cellulose-based acetate to match our desired specs and chose a high quality manufacturer in Switzerland to hand-craft them with care for us. The current limited edition acetate for this comb is called River Rock, which has an uniquely elegant update from the previous version.
    The comb design is cut out of the acetate sheet, shaping the comb. Then the edges are polished, the teeth are bevelled and cut, and the whole comb is polished and brushed. The teeth themselves are rounded with pumice. The result is a comb with smoothly-tapered teeth and rounded tips for more comfort.
    Lastly, it's hit with an acid vapor to add shine and tumbled for a last polish before the white logo is printed. A lot of energy went into the production of our combs and we couldn't be more proud!`,
    price: 18
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/Scissors_01_1024x1024.jpg?v=1515183504',
    name: 'BEARD TRIMMING SCISSORS',
    type: 'Grooming Tools',
    description: `We have worked hard to develop a pair of scissors that are not only functionally awesome, but also beautiful to look at. These Beardbrand Scissors were designed by our founder, Eric Bandholz, and feature a matte finish with gold accents. The handle is ergonomically shaped and designed to put your third finger through the hole and use the rest of the handle to rest your two fingers. This gives you more control when trimming.
    The blade is made of Japanese Steel 4034 and has a HRC rating of 55 - 56. This quality level is nearly at professional hair cutting scissors level, which have a hardness rating of 59 - 60 and a price tag between $250 - $500. The final assembly of the scissors happens in Taiwan and then they come over to us in the States.
    The scissors are 5.25" and the blades are about 2.5" from tip to fulcrum to meet the requirements of TSA for travel. That being said, never put it past them to not know the current regulations.`,
    price: 45
}),
new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0209/0478/products/Grooming_Kit_1_1024x1024.jpg?v=1556120086',
    name: 'GROOMING KIT',
    type: 'Grooming Tools',
    description: `We strive to make men look and feel awesome. From the shower to the finishing touches before heading out the door, we want to make sure you have the best tools around. Our new Grooming Kit focuses on the essentials that your grooming routine craves.
    Housed in a black walnut box, this kit has everything you need to rock your look with confidence. It includes three versatile sizes of our 100% boar’s hair brushes: the Travel Brush for when you’re jet-setting, the Large Brush to keep your beard and hair in check, and the Round Brush to put the finishing touch on a polished look. There’s also a pair of TSA-compliant scissors, so you never have to be without, and two limited edition acetate combs: our Pocket Comb and Large Comb.
    As you know by now, at Beardbrand we believe in self-investment and how that helps you become the best version of yourself. That is how this kit came to be—to help you achieve the ultimate grooming routine, thus the ultimate you.`,
    price: 200
}),
]

let done=0;
for (let i=0; i<products.length; i++) {
    products[i].save((err, result) => {
        if(err) {
            console.log(err)
        }
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

const exit = () => {
    mongoose.disconnect();
}
