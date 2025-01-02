import logo from "./logo.svg";
import logo_icon from "./logo_icon.svg";
import facebook_icon from "./facebook-icon.svg";
import instagram_icon from "./instagram-icon.svg";
import twitter_icon from "./twitter-icon.svg";
import star_icon from "./star-icon.svg";
import rating_star from "./rating_star.svg";
import monster_1 from "./monster-1.jpeg";
import monster_2 from "./monster-2.jpeg";
import monster_3 from "./monster-3.jpeg";
import monster_4 from "./monster-4.jpeg";
import monster_5 from "./monster-5.jpeg";
import monster_6 from "./monster-6.jpeg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";
import star_group from "./star-group.svg";
import credit_icon from "./credit-icon.svg";
import profile_icon from "./profile-icon.svg";

export const assets = {
	logo,
	logo_icon,
	facebook_icon,
	instagram_icon,
	twitter_icon,
	star_icon,
	rating_star,
	monster_1,
	monster_2,
	monster_3,
	monster_4,
	monster_5,
	monster_6,
	email_icon,
	lock_icon,
	cross_icon,
	star_group,
	credit_icon,
	profile_icon,
};

export const monstersData = [
	{ image: monster_1, id: 1 },
	{ image: monster_2, id: 2 },
	{ image: monster_3, id: 3 },
	{ image: monster_4, id: 4 },
	{ image: monster_5, id: 5 },
];

export const stepsData = [
	{
		title: "Imagine & Describe",
		description:
			"Craft a phrase, sentence, or paragraph that captures the image you envision.",
		icon: step_icon_1,
	},
	{
		title: "Watch the Transformation",
		description:
			"Witness our AI-powered engine turn your text into a stunning, unique image in mere seconds.",
		icon: step_icon_2,
	},
	{
		title: "Download & Share Instantly",
		description:
			"Get your creation in an instant and share it with the world effortlessly from our platform.",
		icon: step_icon_3,
	},
];

export const descriptionData = [
	{
		heading: "Discover AI-Powered Text to Image Generator.",
		shortDes:
			"Bring your ideas to life effortlessly with our free AI image generator. Transform your text into stunning visuals in just a few clicks. Describe it, and watch it come to life instantly.",
		extendedDes:
			"Type a prompt, and our advanced AI creates high-quality images in seconds. From product visuals to character designs, even the most imaginative concepts are brought to life. The possibilities are endless!",
	},
];

export const testimonialsData = [
	{
		image: "https://randomuser.me/api/portraits/men/43.jpg",
		name: "Donald Jackman",
		role: "Graphic Designer",
		stars: 5,
		text: `Vislize-Ai has been a lifesaver for my design projects. As a graphic designer, crafting a phrase, sentence, or paragraph that captures the image you envision is crucial. Vislize-Ai's AI-powered engine transforms my text into stunning, unique images in mere seconds. I can get my creations instantly and share them effortlessly. This tool has made my work so much easier and more enjoyable!`,
	},
	{
		image: "https://randomuser.me/api/portraits/men/95.jpg",
		name: "Richard Nelson",
		role: "Content Creator",
		stars: 5,
		text: `Vislize-Ai has truly been a game-changer for my content creation process. Bringing my ideas to life has never been this effortless. I just type a few words, and within seconds, my text is transformed into stunning visuals. This tool is incredibly user-friendly and has significantly improved the quality of my work!`,
	},
	{
		image: "https://randomuser.me/api/portraits/women/55.jpg",
		name: "Emily Watson",
		role: "Digital Marketer",
		stars: 5,
		text: `As a digital marketer, I need high-quality images quickly and efficiently. With Vislize-Ai, I just type a prompt, and their advanced AI creates beautiful images in seconds. From product visuals to character designs, even the most imaginative concepts come to life effortlessly. This tool has been indispensable for my social media campaigns!`,
	},
];

export const plans = [
	{
		id: "Basic",
		price: 10,
		credits: 100,
		desc: "Best for personal use.",
	},
	{
		id: "Advanced",
		price: 50,
		credits: 500,
		desc: "Best for business use.",
	},
	{
		id: "Business",
		price: 250,
		credits: 5000,
		desc: "Best for enterprise use.",
	},
];
