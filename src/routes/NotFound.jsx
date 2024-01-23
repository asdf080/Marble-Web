import React from "react";
import Layout from "../components/Layout";
import Lottie from "lottie-react";
import NotAni from "../assets/NotAni.json";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full flex h-[507px]">
          {/* 왼쪽 */}
          <div className="w-1/2 h-full flex flex-col justify-center space-y-8">
            <h2 className="text-5xl font-bold">404 PAGE NOT FOUND</h2>
            <h3 className="text-2xl font-semibold">Protocol missing...</h3>
            <p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
          </div>
          {/* 오른쪽 */}
          <div className="w-1/2 h-full">
            <Lottie animationData={NotAni} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
