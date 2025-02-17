"use client"
import { Provider } from 'react-redux'
import { store } from '@/store';
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className="app">
        <Provider store={store}>
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
