import React from "react";

export default function RoomByUser() {
  return (
    <div className="container mx-auto px-10">
      <div className="h-28"></div>
      <div>
        <h1 className="text-3xl font-semibold pb-4 border-b">Chuyến đi</h1>
        <div className="flex">
          <div className="flex flex-col mt-4 md:px-10 lg:w-2/3">
            <div className="border mb-4 rounded-lg hover:shadow-xl duration-200 flex cursor-pointer">
              <div>
                <img
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658417426651_dirtiest-1170x650.jpg"
                  alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658417426651_dirtiest-1170x650.jpg"
                  className="h-full rounded-l-lg"
                />
              </div>
              <div className="px-4 py-2  w-full">
                <div className="flex justify-between items-center md:border-b pb-2">
                  <div>
                    <h3 className="font-semibold md:text-xl uppercase">
                      Khách Sạn Palace
                    </h3>
                    <span className="text-gray-600 text-xs md:text-sm md:ml-2">
                      <span>09-11-2023 -&gt; </span>
                      <span>09-11-2023</span>
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm md:text-xl">
                      0{" "}
                      <span className="font-medium text-gray-600 text-xs md:text-sm">
                        $/0 ngày
                      </span>
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <h3 className="font-semibold text-sm md:text-lg text-gray-800">
                    Tiện ích
                  </h3>
                  <div className="flex items-center">
                    <div className="flex items-center p-3">
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 24,
                            width: 24,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center p-3">
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 24,
                            width: 24,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center p-3">
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 24,
                            width: 24,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center p-3">
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 24,
                            width: 24,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center p-3">
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 24,
                            width: 24,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center p-3">
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 24,
                            width: 24,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M29 15v16h-2v-6h-6v6h-2v-6l.005-.15a2 2 0 0 1 1.838-1.844L21 23h6v-8zM5 15v8h6a2 2 0 0 1 1.995 1.85L13 25v6h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.556 8.571 1 1 0 0 1-.79 1.423l-.113.006H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.347a1 1 0 0 1-.946-1.323l.043-.106A15 15 0 0 1 16 1zm0 2C11.71 3 7.799 5.097 5.402 8.468l-.197.284L5.042 9h21.915l-.162-.248a12.995 12.995 0 0 0-10.1-5.734l-.365-.014z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">
            <div className="w-full sticky top-32 border mt-4 rounded-lg shadow-lg p-4">
              <h3 className="font-semibold text-2xl mb-3">
                Khám phá các địa điểm thú vị
              </h3>
              <p className="text-gray-600 text-base">
                Đã đến lúc phủi bụi hành lý và bắt đầu chuẩn bị cho chuyến phiêu
                lưu tiếp theo của bạn rồi
              </p>
              <a
                className="inline-block w-auto my-4 border border-black font-semibold hover:bg-gray-200 duration-200 px-5 py-3 rounded-lg"
                href="/"
              >
                Bắt đầu tìm kiếm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
