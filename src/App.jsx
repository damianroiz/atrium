import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './Components/AppLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Treatments from './Pages/Treatments/Treatments';
import Blog from './Pages/Blog/Blog';
import Faqs from './Pages/Faqs/Faqs';
import './styles.css';
import '../src/Components/components.css';


// import HomeRoutes from './Routes/HomeRoutes';
import DashboardRoutes from './Routes/DashboardRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
            {/* navigate to home page if no path is provided */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faqs" element={<Faqs />} />
          </Route>
          {/* <Route path="/" element={<HomeRoutes />} /> */}
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
