import { inView, animate } from "motion";

const experiencesContentAnimation = () => {
	const experiencesContent = document.querySelectorAll(".experiencesContent");

	experiencesContent.forEach((element, index) => {
		inView(element, () => {
			if (!element.classList.contains("animated")) {
				animate(
					element,
					{
						opacity: [0, 0.2, 0.8, 1],
						transform: ["translateX(100px)", "none"],
					},
					{ duration: 0.5, delay: index * 0.02 } // Staggering each by 0.2 seconds
				);
				element.classList.add("animated");
			}
		});
	});
};

const mobileAnimation = () => {
	inView(".mobile-animation", (info) => {
		// Add a class to prevent reanimation
		if (!info.target.classList.contains("animated")) {
			animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
			info.target.classList.add("animated");
		}
	});
};

export default {
	mobileAnimation,
	experiencesContentAnimation,
};
