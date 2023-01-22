import React from "react";

import { Img, Text, Stack } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-start sm:mb-[12px] md:mb-[16px] mb-[32px] sm:mt-[25px] md:mt-[33px] mt-[64px] mx-[auto] sm:w-[100%] w-[85%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
            <div className="flex flex-col justify-start sm:mb-[14px] md:mb-[18px] mb-[36px] sm:mx-[0] md:pr-[3px] pr-[6px] sm:pt-[2px] md:pt-[3px] pt-[6px] sm:px-[0] sm:w-[100%] w-[43%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                <Img
                  src="images/img_group19.svg"
                  className="flex-shrink-0 max-w-[100%] mb-[2px] w-[35%]"
                  alt="GroupNineteen"
                />
                <Text className="flex-grow font-bold font-poppins sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[1px] sm:text-[20px] md:text-[22px] text-[24px] text-white_A700">
                  Elliye{" "}
                </Text>
              </div>
              <Text className="font-normal font-poppins leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[43px] sm:mx-[0] not-italic text-[18px] text-gray_500 sm:w-[100%] w-[53%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor .
              </Text>
              <div className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
                  <Img
                    src="images/img_call.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="call"
                  />
                  <Text className="flex-grow font-normal font-poppins mb-[3px] sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[2px] not-italic text-[18px] text-white_A700">
                    +1234567890
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[16px] sm:mt-[6px] md:mt-[8px] pr-[4px] py-[4px] w-[100%]">
                  <Img
                    src="images/img_mail.svg"
                    className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="mail"
                  />
                  <Text className="flex-grow font-normal font-poppins mb-[1px] sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-[18px] text-white_A700">
                    elliye@support.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start sm:mb-[22px] md:mb-[28px] mb-[56px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[17%]">
              <Text className="font-bold font-poppins sm:text-[20px] md:text-[22px] text-[24px] text-white_A700 w-[auto]">
                Product Links
              </Text>
              <div className="flex flex-col justify-start mb-[1px] sm:mt-[17px] md:mt-[23px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <Text className="font-normal font-poppins not-italic text-[18px] text-gray_500 w-[auto]">
                  Categories
                </Text>
                <Text className="font-normal font-poppins md:mt-[10px] mt-[20px] sm:mt-[7px] not-italic text-[18px] text-gray_500 w-[auto]">
                  New Arrival
                </Text>
                <Text className="font-normal font-poppins md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Features
                </Text>
                <Text className="font-normal font-poppins md:mt-[12px] mt-[24px] sm:mt-[9px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Collections
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[17%]">
              <Text className="font-bold font-poppins mt-[3px] sm:text-[20px] md:text-[22px] text-[24px] text-white_A700 w-[auto]">
                Company
              </Text>
              <div className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                <Text className="font-normal font-poppins not-italic text-[18px] text-gray_500 w-[auto]">
                  About
                </Text>
                <Text className="font-normal font-poppins md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal font-poppins mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal font-poppins mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Services
                </Text>
                <Text className="font-normal font-poppins md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal font-poppins mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-[18px] text-gray_500 w-[auto]">
                  Terms of service
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-start sm:mb-[28px] md:mb-[36px] mb-[71px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
              <Text className="font-bold font-poppins sm:text-[20px] md:text-[22px] text-[24px] text-white_A700 w-[auto]">
                Join our Newsletter
              </Text>
              <Text className="font-normal font-poppins leading-[normal] sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] not-italic text-[18px] text-gray_500 sm:w-[100%] w-[87%]">
                Drop your email below to get update, promotions, coupons, and
                more!
              </Text>
              <div className="bg-gray_800 border border-solid border-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[18px] mt-[35px] md:pl-[12px] sm:pl-[15px] pl-[24px] w-[100%]">
                <Text className="font-normal font-poppins mb-[17px] sm:mb-[6px] md:mb-[8px] md:mt-[11px] mt-[22px] sm:mt-[8px] not-italic text-[18px] text-bluegray_100_87 tracking-ls036 md:tracking-ls1 sm:tracking-ls1 w-[auto]">
                  Enter your email
                </Text>
                <Stack className="bg-white_A700 h-[60px] p-[14px] sm:p-[5px] md:p-[7px] relative sm:w-[23px] md:w-[30px] w-[60px]">
                  <Img
                    src="images/img_menu.svg"
                    className="absolute h-[31px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[54%]"
                    alt="menu"
                  />
                </Stack>
              </div>
            </div>
          </div>
          <Text className="font-normal font-poppins mt-[100px] sm:mt-[39px] md:mt-[51px] not-italic text-[14px] text-bluegray_100 w-[auto]">
            Copyright © 2021 Elliye. All Right Reseved
          </Text>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
