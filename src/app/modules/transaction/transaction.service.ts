import TransactionModel from "./transaction.model";

export const TransactionService = {
  async getSalesHistory(userId: string) {
    return await TransactionModel.find({ sellerId: userId }).populate(
      "listingId"
    );
  },

  async getPurchaseHistory(userId: string) {
    return await TransactionModel.find({ buyerId: userId }).populate(
      "listingId"
    );
  },
};
