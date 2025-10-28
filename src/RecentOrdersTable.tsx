import React from "react";
import "./RecentOrdersTable.css";
import EditableTitle from "./EditableTitle";
import { FaTrash } from "react-icons/fa";

// 데이터 타입 정의
interface Order {
  product: string;
  number: string;
  payment: string;
  status: string;
}

interface RecentOrdersTableProps {
  title: string;
  orders: Order[];
  onTitleChange: (newTitle: string) => void;
  onDelete: () => void;
}

const RecentOrdersTable: React.FC<RecentOrdersTableProps> = ({
  title,
  orders,
  onTitleChange,
  onDelete,
}) => {
  return (
    <section className="recent-orders">
      <div className="recent-orders-header">
        <EditableTitle initialTitle={title} onSave={onTitleChange} />
        <button
          onClick={onDelete}
          className="delete-section-btn"
          title="Delete section"
        >
          <FaTrash />
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.product}</td>
              <td>{order.number}</td>
              <td>{order.payment}</td>
              <td>
                <span
                  className={`status ${order.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#" className="show-all">
        Show All
      </a>
    </section>
  );
};

export default RecentOrdersTable;
