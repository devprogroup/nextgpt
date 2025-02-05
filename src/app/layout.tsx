"use client"
import { Provider } from 'react-redux'
import { store } from '@/store';
import "../globals.css";
import ProgressHeader from '@/components/progress-header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="app">
          <Provider store={store}>
            <ProgressHeader />
            <div className="screen-x-padding py-16">
              {children}            
            </div>
          </Provider>
        
      </body>
    </html>
  );
}
