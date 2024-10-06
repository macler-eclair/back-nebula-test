-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('CREATED', 'PENDING', 'ERROR', 'SUCCESS');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "marketing_data" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "status" "PurchaseStatus" NOT NULL,
    "user_id" TEXT NOT NULL,
    "offer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
