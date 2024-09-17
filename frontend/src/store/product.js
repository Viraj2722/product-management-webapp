import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [], 
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      const data = await res.json();

      if (!data.data) {
        throw new Error("Invalid response format");
      }

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Error creating product:", error.message);
      return { success: false, message: error.message };
    }
  },

  fetchProducts: async () =>  {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log("API Response:", data); 

      if (Array.isArray(data)) {
        console.log("Setting products state:", data); 
        set({ products: data });
      } else {
        console.warn("Unexpected API response format:", data);
        set({ products: [] });
      }
    } catch (error) {
      console.error("Error fetching products:", error.message);
      set({ products: [] }); 
    }
  },

  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete product");
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      console.error("Error deleting product:", error.message);
      return { success: false, message: error.message };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }
      else{
         window.location.reload();
      }

      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.data : product
        ),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      console.error("Error updating product:", error.message);
      return { success: false, message: error.message };
    }
  },
}));

export default useProductStore;
