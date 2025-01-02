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
		title: "Describe Your Vision",
		description:
			"Type a phrase, sentence, or paragraph that describes the image you want to create.",
		icon: step_icon_1,
	},
	{
		title: "Watch the Magic",
		description:
			"Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
		icon: step_icon_2,
	},
	{
		title: "Download & Share",
		description:
			"Instantly download your creation or share it with the world directly from our platform.",
		icon: step_icon_3,
	},
];

export const testimonialsData = [
	{
		image: profile_img_1,
		name: "Donald Jackman",
		role: "Graphic Designer",
		stars: 5,
		text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
	},
	{
		image: profile_img_2,
		name: "Richard Nelson",
		role: "Content Creator",
		stars: 5,
		text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
	},
	{
		image: profile_img_1,
		name: "Donald Jackman",
		role: " Graphic Designer",
		stars: 5,
		text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
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
