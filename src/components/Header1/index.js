import React from "react";

import { Img, Text, Button, Line } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:p-[12px] sm:p-[15px] p-[24px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mb-[3px] md:mb-[4px] mb-[9px] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
              <Img
                src="images/img_volume.svg"
                className="flex-shrink-0 max-w-[100%] mb-[2px] w-[35%]"
                alt="volume"
              />
              <Text className="flex-grow font-bold font-poppins sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[1px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_800">
                Elliye{" "}
              </Text>
            </div>
            <Img
              src="images/img_car_1.svg"
              className="max-w-[100%] sm:ml-[216px] md:ml-[279px] ml-[541px] my-[12px] sm:my-[4px] md:my-[6px] w-[5%]"
              alt="car"
            />
            <Button
              className="bg-gray_800 cursor-pointer font-medium font-poppins min-w-[6%] sm:ml-[12px] md:ml-[16px] ml-[32px] mr-[120px] sm:mr-[47px] md:mr-[61px] md:px-[14px] sm:px-[15px] px-[29px] py-[13px] sm:py-[5px] md:py-[6px] text-[18px] text-center text-white_A700 w-[max-content]"
              size="PaddingAll13"
              variant="FillGray800"
              fontStyle="PoppinsMedium24"
            >
              Login
            </Button>
          </div>
          <Line className="bg-gray_50 h-[1px] sm:w-[100%] w-[85%]" />
        </div>
      </header>
    </>
  );
};

export default Header1;
