import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

type Props = {
  type?: string;
  url: string;
};

export default function SocialMediaShare({ type = "artikel", url }: Props) {
  return (
    <div className="space-y-2">
      <span className="font-medium">Bagikan {type} ini:</span>

      <div className="flex items-center gap-2">
        {/* FACEBOOK */}
        <FacebookShareButton url={url}>
          <FacebookIcon
            bgStyle={{ fill: "hsl(var(--primary))" }}
            iconFillColor="hsl(var(--background))"
            size={32}
            round
          />
        </FacebookShareButton>
        {/* TWITTER */}
        <TwitterShareButton url={url}>
          <TwitterIcon
            bgStyle={{ fill: "hsl(var(--primary))" }}
            iconFillColor="hsl(var(--background))"
            size={32}
            round
          />
        </TwitterShareButton>
        {/* TELEGRAM */}
        <TelegramShareButton url={url}>
          <TelegramIcon
            bgStyle={{ fill: "hsl(var(--primary))" }}
            iconFillColor="hsl(var(--background))"
            size={32}
            round
          />
        </TelegramShareButton>
        {/* WHATSAPP */}
        <WhatsappShareButton url={url}>
          <WhatsappIcon
            bgStyle={{ fill: "hsl(var(--primary))" }}
            iconFillColor="hsl(var(--background))"
            size={32}
            round
          />
        </WhatsappShareButton>
        {/* LINKEDIN */}
        <LinkedinShareButton url={url}>
          <LinkedinIcon
            bgStyle={{ fill: "hsl(var(--primary))" }}
            iconFillColor="hsl(var(--background))"
            size={32}
            round
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
