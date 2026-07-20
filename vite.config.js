import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        signin: resolve(__dirname, "signin.html"),
        requests: resolve(__dirname, "requests.html"),
        requestCreate: resolve(__dirname, "request-create.html"),
        requestEdit: resolve(__dirname, "request-edit.html"),
        requestDetail: resolve(__dirname, "request-detail.html"),
        requestlineCreate: resolve(__dirname, "requestline-create.html"),
        requestlineEdit: resolve(__dirname, "requestline-edit.html"),
        products: resolve(__dirname, "products.html"),
        productCreate: resolve(__dirname, "product-create.html"),
        productEdit: resolve(__dirname, "product-edit.html"),
        vendors: resolve(__dirname, "vendors.html"),
        vendorCreate: resolve(__dirname, "vendor-create.html"),
        vendorEdit: resolve(__dirname, "vendor-edit.html"),
        users: resolve(__dirname, "users.html"),
        userCreate: resolve(__dirname, "user-create.html"),
        userEdit: resolve(__dirname, "user-edit.html"),
      },
    },
  },
});
