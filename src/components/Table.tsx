import { DataType } from '@/types/DataType';
import { Table } from 'antd';
import Image from 'next/image';
import React from 'react';

type Props = {
  coins: DataType[];
};

const TableView: React.FC<Props> = ({ coins }) => {
  const columns = [
    
    {
      title: "Id",
      dataIndex: 'id',
      key: 'id',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image: string) => <Image src={image} alt="coin" width={30} height={30} unoptimized />,
        // Added `unoptimized` to allow using external image URLs
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
   
    {
      title: 'Current Price',
      dataIndex: 'current_price', // API provides this key
      key: 'current_price',
      render: (price: number) => `$${price.toLocaleString()}`,
    },
    {
      title: 'Total Volume',
      dataIndex: 'total_volume', // API provides this key
      key: 'total_volume',
      render: (volume: number) => volume.toLocaleString(),
    },
  ];

  // You can pass the original 'image' URL directly since it's a string
  const mappedCoins = coins.map(coin => ({
    ...coin,
    image: coin.image, // Directly use the image URL (e.g., "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png")
  }));

  return (
    <div>
      <Table
        columns={columns}
        dataSource={mappedCoins} // Pass the mapped coins to the Table
        rowKey="id"
        pagination={false} // Disables pagination (you can enable it if needed)
      />
    </div>
  );
};

export default TableView;
