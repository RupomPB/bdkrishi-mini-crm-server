import Customer from "../models/Customer.js";
import Lead from "../models/Lead.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalCustomers = await Customer.countDocuments();
    const totalLeads = await Lead.countDocuments();

    const wonLeads = await Lead.countDocuments({
      status: "Won",
    });

    const lostLeads = await Lead.countDocuments({
      status: "Lost",
    });

    const recentCustomers = await Customer.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const recentLeads = await Lead.find()
      .populate("customer", "name")
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,
      totalCustomers,
      totalLeads,
      wonLeads,
      lostLeads,
      recentCustomers,
      recentLeads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};