import React from "react";
import Icon from "../components/elements/Icon";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

const ResultPayment = () => {
  return (
    <div className="min-h-screen flex">
      <div
        className="flex-[5] min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/0e4c/3c18/18a79468d72ed11ecff06ce23da1248d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qV3tQwOy9JZbU5-89JyBJaBjDdKCPYxfP1WxTY6gNwpj1Y-YCvVOWFGRzednP48io~~qPONpcTsWQFsuz9GF2rXoHpwkxWUaHYTPJtyv~r6uvmGRw2jdP9WvngU7D4wVXJ2j8lqJEorfVug1tnLD7rzXN32~o-hDa9BkHz~0R4lRjLcmtb9xS62vCtxW1OYZQLx3qbdWejVa28f1mmeATcpRw8WnShsGDCBQEJkAlUmUZ88mx-ukl7b5g6GQAZo9efXiNvX9mOq3a-Tk-EnAvNpApgDY4od7G6FV3LeuW6betvrJ7HDQCVQaVr5hI~WQgx3YU3XM7ya5vcHDXTYiPA__)",
        }}>
        <div className="h-full w-full absolute top-0 right-0 bg-black/70 flex flex-col px-24 gap-4 justify-center">
          <Icon />
          <p className="text-white font-bold text-5xl">Thankyou For Purchasing</p>
          <p className="text-gray-300 text-2xl">
            Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna
            et.Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna
            et.
          </p>
          <div className="flex gap-4">
            <p className="text-white font-bold">Please Download Your Ticket</p>
            <FaLongArrowAltRight className="text-white font-bold text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex-[3] min-h-screen border bg-gray-300 flex flex-col gap-8 justify-center items-center">
        <div className="bg-white flex flex-col px-12 py-8">
          <div
            className="w-60 h-60 bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://s3-alpha-sig.figma.com/img/09c9/4f8a/5c8639cbd11fc28260c6b0d752134f07?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RKPaF3Nm33diyyUJbk92W4pmUIKje2rVgtqW~FLcr7uJH4sZFZYsOPEl~7jO1IZeMgyU7CBLjGhUxKzQxZvch4oBr0YXuUQlRUGq03m35~27gT7BVgCHK8t4jgWGb~l070lK8fYIpWg3hEJGKbPsp0zUXGX2omLksBrDNgJKjbYhGKM9UfJdXRP7P~2tQWhlPvFlDmf3MEdXUDjalo3btKuxQag35qOi8-VxK8xLpFqK7Go54UeQZOXbx1Gg6PCLq1HRY1~tio~GE1S5-t1AmXfOvjvlgwPmKDVe3UHpubJBjZWqeNRUHP-mPuwvDiWsKYYp1Yt6Vtuhnws1Y5nKDQ__)",
            }}></div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-start flex-col">
                <p className="text-gray-400 font-semibold">Movie</p>
                <p className="font-bold">Spider-Man: ..</p>
              </div>
              <div className="flex items-end flex-col">
                <p className="text-gray-400 font-semibold">Category</p>
                <p className="font-bold">PG-13</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-start flex-col">
                <p className="text-gray-400 font-semibold">Date</p>
                <p className="font-bold">07 Jul</p>
              </div>
              <div className="flex items-end flex-col">
                <p className="text-gray-400 font-semibold">Count</p>
                <p className="font-bold">3 pcs</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-start flex-col">
                <p className="text-gray-400 font-semibold">Date</p>
                <p className="font-bold">07 Jul</p>
              </div>
              <div className="flex items-end flex-col">
                <p className="text-gray-400 font-semibold">Seats</p>
                <p className="font-bold">C4, C5, C6</p>
              </div>
            </div>
          </div>
          <div className="w-full border-2 border-gray-400 shadow-2xl flex justify-between mt-6 rounded-md px-4 py-2">
            <p className="font-bold">Total</p>
            <p className="font-bold">$30.00</p>
          </div>
        </div>
        <div className="w-[70%] text-blue-600 font-bold text-2xl  flex py-4 justify-center gap-4 items-center shadow-2xl border-2 border-blue-600 rounded-md">
          <MdFileDownload />
          <p>Download</p>
        </div>
        <div className="w-[70%] text-white font-bold text-2xl flex py-4 justify-center gap-4 items-center  shadow-2xl bg-blue-600 rounded-md">
          <p>Done</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPayment;
