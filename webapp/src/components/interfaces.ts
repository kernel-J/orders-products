import type { DraggableProvided } from 'react-beautiful-dnd';

export interface Order {
    OrderID: number;
    CustomerID: number;
    ProductID: number;
    OrderStatus: string;
}

export interface OrderData {
  Queued: Order[],
  InProgress: Order[],
  QA: Order[],
}

export interface Product {
    ProductID: number;
    ProductName: string;
    ProductPhotoURL: string;
    ProductOrder: number;
}

export interface ProductData {
    Products: Product[]
}

export interface DraggableItemProps extends Order{
    draggableProvided: DraggableProvided;
    removeOrder: (item: Order) => void;
}

export interface DraggableProductItemProps extends Product{
    draggableProvided: DraggableProvided;
    removeOrder: (item: Product) => void;
}

export interface DraggableListProps {
    ID: string;
    listTitle: string;
    removeOrder: (item: Order) => void;
    items: Order[];
};

export interface DraggableProductListProps {
    ID: string;
    listTitle: string;
    removeOrder: (item: Product) => void;
    items: Product[];
};

export interface HeaderLink {
    label: string;
    url: string;
}

export interface HeaderProps {
    links: HeaderLink[];
}