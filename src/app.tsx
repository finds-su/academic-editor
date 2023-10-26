import React, { useState } from 'react';
import IndexLayout from '@/components/pages/index/index-layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<IndexLayout />} />
                {/*<Route path="/blog/*" element={<BlogApp />} />*/}
                {/*<Route path="/users/*" element={<UserApp />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
