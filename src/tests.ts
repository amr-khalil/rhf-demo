type Product = {
  name: string;
  price: number;
  screenSize: number;
} & (Laptop | AirPod);

type Laptop = {
  type: "laptop";
  screenSize: number;
  graphicsCard: string;
};

type AirPod = {
  type: "airPod";
  batteryLife: number;
};

const laptop: Product = {
  type: "laptop",
  name: "Laptop",
  price: 1200,
  graphicsCard: "NVIDIA RTX 3060",
};

const airPod: Product = {
  type: "airPod",
  name: "AirPod",
  price: 250,
  batteryLife: 24,
};
