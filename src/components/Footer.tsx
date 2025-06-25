import { FooterIcon } from "../assets/footerIcon";
import VNFlagImg from "../assets/vn_flag.svg";
import TeleGramIcon from "../assets/telegram-icon.svg";
import DiscordIcon from "../assets/discord-icon.svg";
import XIcon from "../assets/x-icon.svg";
import FBIcon from "../assets/facebook-icon.svg";
import TiktokIcon from "../assets/tiktok-icon.svg";
import YouTubeIcon from "../assets/youtube-icon.svg";
import ThreadsIcon from "../assets/threads-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
export const Footer = () => {
  return (
    <div className="px-12.5 max-lg:hidden">
      <div className="py-8 relative min-h-100">
        <div className="absolute w-150 h-full transform top-0 left-1/2 -translate-x-1/2 ">
          <FooterIcon />
        </div>
        <div className="max-w-[750px] w-full">
          <div className="mb-6 w-fit flex text-white items-center text-sm px-[11.2px] gap-2 py-2 rounded-4xl bg-[#78140f]">
            <div className="w-5 h-5">
              <img src={VNFlagImg} />
            </div>
            <span>Hoàng Sa & Trường Sa là của Việt Nam!</span>
          </div>
          <div className="mb-8 w-fit flex text-white items-center gap-12">
            <div className="h-15">
              <img
                className="h-15 w-auto"
                src="https://www.rophim.me/images/logo.svg"
              />
            </div>
            <div className="pl-12 border-l-[1px] border-white/10 flex gap-3">
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://t.me/congdongrophim"
                title="Telegram"
              >
                <div className="w-3.5 h-3.5">
                  <img
                    className="h-full w-full"
                    src={TeleGramIcon}
                    alt="Telegram"
                  />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://discord.gg/rophim"
                title="Discord"
              >
                <div className="w-3.5 h-3.5">
                  <img
                    className="h-full w-full"
                    src={DiscordIcon}
                    alt="Discord"
                  />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://x.com/rophimtv"
                title="X"
              >
                <div className="w-3.5 h-3.5">
                  <img className="h-full w-full" src={XIcon} alt="X" />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://www.facebook.com/rophimorg/"
                title="Facebook"
              >
                <div className="w-3.5 h-3.5">
                  <img className="h-full w-full" src={FBIcon} alt="Facebook" />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://www.tiktok.com/@rophimtv"
                title="Tiktok"
              >
                <div className="w-3.5 h-3.5">
                  <img
                    className="h-full w-full"
                    src={TiktokIcon}
                    alt="Tiktok"
                  />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://www.youtube.com/@rophimcom"
                title="Youtube"
              >
                <div className="w-3.5 h-3.5">
                  <img
                    className="h-full w-full"
                    src={YouTubeIcon}
                    alt="Youtube"
                  />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://www.threads.net/@rophimtv"
                title="Threads"
              >
                <div className="w-3.5 h-3.5">
                  <img
                    className="h-full w-full"
                    src={ThreadsIcon}
                    alt="Threads"
                  />
                </div>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center bg-[#282B3A] rounded-full"
                target="_blank"
                href="https://www.instagram.com/rophimtv"
                title="Instagram"
              >
                <div className="w-3.5 h-3.5">
                  <img
                    className="h-full w-full"
                    src={InstagramIcon}
                    alt="Instagram"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="mb-4 text-white text-sm font-normal">
            <span className="mr-6">Hỏi-Đáp</span>
            <span className="mr-6">Chính sách bảo mật</span>
            <span className="mr-6">Điều khoản sử dụng</span>
            <span className="mr-6">Giới thiệu</span>
            <span className="">Liên hệ</span>
          </div>
          <div className="mb-4 text-white text-sm">
            <span className="mr-6">Dongphim</span>
            <span className="mr-6">Ghienphim</span>
            <span className="mr-6">Motphim</span>
            <span className="">Subnhanh</span>
          </div>
          <div className="mb-2 text-white/50 text-sm">
            <span className="leading-[22.4px]">
              RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao
              miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới
              khổng lồ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như
              Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng
              thể loại. Khám phá nền tảng phim trực tuyến hay nhất 2024 chất
              lượng 4K!
            </span>
          </div>
          <div className="text-white/50 text-sm">© 2024 RoPhim</div>
        </div>
      </div>
    </div>
  );
};
