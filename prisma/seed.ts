import { PrismaClient } from '@prisma/client'

const TEST_USERS = [
    {
        "id": "da91022e-5f70-43ea-a8a0-966d5c6abcc6",
        "first_name": "Norval",
        "last_name": "Cruickshank",
        "email": "Bettie_Walker94@yahoo.com",
        "marketing_data": {
            "group": "758"
        }
    },
    {
        "id": "811f2651-bbfc-4395-8737-fa8a186b1669",
        "first_name": "Royce",
        "last_name": "Kunde",
        "email": "Alberta49@hotmail.com",
        "marketing_data": {
            "group": "194"
        }
    },
    {
        "id": "f7ce906b-b8c5-45df-9bf9-06e48d289250",
        "first_name": "Janice",
        "last_name": "Carroll",
        "email": "Dangelo.Nienow92@yahoo.com",
        "marketing_data": {
            "group": "180"
        }
    },
    {
        "id": "af786d2d-67d1-48a6-8669-87b758cfe0db",
        "first_name": "Tanner",
        "last_name": "Leuschke",
        "email": "Idella7@gmail.com",
        "marketing_data": {
            "group": "323"
        }
    },
    {
        "id": "072d2048-8657-42a1-a79e-8fb22c022dd9",
        "first_name": "Cesar",
        "last_name": "Stoltenberg",
        "email": "Gussie_Mitchell@hotmail.com",
        "marketing_data": {
            "group": "145"
        }
    },
    {
        "id": "b373040f-961b-4cc9-b09e-2fe6a7536cb0",
        "first_name": "Kristin",
        "last_name": "Hagenes",
        "email": "Marisol.Gibson13@gmail.com",
        "marketing_data": {
            "group": "557"
        }
    },
    {
        "id": "3eda17a2-bd26-4486-b09e-fa0ab424f192",
        "first_name": "Jimmy",
        "last_name": "Feil",
        "email": "Arden90@gmail.com",
        "marketing_data": {
            "group": "350"
        }
    },
    {
        "id": "1696883c-66af-4ff2-adf6-4a19ff9b2c55",
        "first_name": "Craig",
        "last_name": "Thiel",
        "email": "Reinhold.Barrows@gmail.com",
        "marketing_data": {
            "group": "718"
        }
    },
    {
        "id": "8eeeecd4-3ed8-4464-8f9e-ae8954b3722f",
        "first_name": "Immanuel",
        "last_name": "Schumm",
        "email": "Vickie_Tillman@hotmail.com",
        "marketing_data": {
            "group": "371"
        }
    },
    {
        "id": "14c73df4-1b24-43fb-bd2a-556ebed6269c",
        "first_name": "Delbert",
        "last_name": "Labadie",
        "email": "Verner.Goodwin@yahoo.com",
        "marketing_data": {
            "group": "695"
        }
    }
]

const TEST_OFFERS = [
    {
        "id": "d32993b0-8fe5-4082-a782-149c0421d582",
        "title": "Shirt",
        "price": 448.14
    },
    {
        "id": "bb5cec70-d65c-485e-ab68-72a7e13d53ee",
        "title": "Pants",
        "price": 303.89
    },
    {
        "id": "82ecb381-1f7e-47f1-8a38-c7564d3e1403",
        "title": "Chips",
        "price": 969.11
    },
    {
        "id": "69fdcae8-9b52-486f-96ee-de82dd0c83d5",
        "title": "Shoes",
        "price": 855.20
    }
]

const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({ data: TEST_USERS })
    await prisma.offer.createMany({ data: TEST_OFFERS })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})