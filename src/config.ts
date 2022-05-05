export const SITE = {
	title: 'Global OSCQR',
	description: 'An OSCQR site with Global colors.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'About OSCQR', header: true },
		{ text: 'Introduction', link: 'about/introduction' },
		{ text: 'OSCQR Process', link: 'about/process' },

		{ text: 'Overview and Information', header: true },
		{ text: 'Course Overview Introduction', link: 'overview/introduction' },
		{ text: 'Standard 1 - Getting Started', link: 'overview/standard-1' },
		{ text: 'Standard 2 - Course Overview', link: 'overview/standard-2' },
		{ text: 'Standard 3 - Course Information & Syllabus', link: 'overview/standard-3' },
		{ text: 'Standard 4 - Printable Syllabus', link: 'overview/standard-4' },
		{ text: 'Standard 5 - Campus Policies', link: 'overview/standard-5' },
		{ text: 'Standard 6 - Learner Success Resources', link: 'overview/standard-6' },
		{ text: 'Standard 7 - Course Modality', link: 'overview/standard-7' },
		{ text: 'Standard 8 - Access & Participation Methods', link: 'overview/standard-8' },
		{ text: 'Standard 9 - Course Objectives', link: 'overview/standard-9' },
		{ text: 'Standard 10 - Contact Information', link: 'overview/standard-10' },

		{ text: 'Technology and Tools', header: true },
		{ text: 'Technology Introduction', link: 'technology/introduction' },
		{ text: 'Standard 11 - Requisite Technology Skills', link: 'technology/standard-11' },
		{ text: 'Standard 12 - Scaffolding of Technical Skills', link: 'technology/standard-12' },
		{ text: 'Standard 13 - Access To Technology', link: 'technology/standard-13' },
		{ text: 'Standard 14 - Privacy Policies', link: 'technology/standard-14' },
		{ text: 'Standard 15 - Accessible Technology', link: 'technology/standard-15' },


		{ text: 'Design and Layout', header: true },
		{ text: 'Design Introduction', link: 'design/introduction' },
		{ text: 'Standard 16 - Course Navigation', link: 'design/standard-16' },
		{ text: 'Standard 17 - White Space', link: 'design/standard-17' },
		{ text: 'Standard 18 - Contrast', link: 'design/standard-18' },
		{ text: 'Standard 19 - Instructions', link: 'design/standard-19' },
		{ text: 'Standard 20 - Grammar/Spelling', link: 'design/standard-20' },
		{ text: 'Standard 21 - Text Formatting', link: 'design/standard-21' },
		{ text: 'Standard 22 - Blinking Text', link: 'design/standard-22' },
		{ text: 'Standard 23 - Font & Size', link: 'design/standard-23' },
		{ text: 'Standard 24 - Tables For Layout', link: 'design/standard-24' },
		{ text: 'Standard 25 - Accessibility of Tables', link: 'design/standard-25' },
		{ text: 'Standard 26 - Header Rows/Columns', link: 'design/standard-26' },
		{ text: 'Standard 27 - Slide Layouts/Tiles', link: 'design/standard-27' },
		{ text: 'Standard 28 - Slide Transitions', link: 'design/standard-28' },
		
		{ text: 'Content and Activities', header: true },
		{ text: 'Content Introduction', link: 'content/introduction' },
		{ text: 'Standard 29 - Variety', link: 'content/standard-29' },
		{ text: 'Standard 30 - Higher Order Thinking', link: 'content/standard-30' },
		{ text: 'Standard 31 - Authentic Activities', link: 'content/standard-31' },
		{ text: 'Standard 33 - Open Educational Resources', link: 'content/standard-32' },
		{ text: 'Standard 33 - Copyright', link: 'content/standard-33' },
		{ text: 'Standard 34 - Text Accessibility', link: 'content/standard-34' },
		{ text: 'Standard 35 - Text Equivalents', link: 'content/standard-35' },
		{ text: 'Standard 36 - Graphics/Images', link: 'content/standard-36' },
		{ text: 'Standard 37 - Hyperlink Text', link: 'content/standard-37' },

		{ text: 'Interaction', header: true },
		{ text: 'Interaction Introduction', link: 'interaction/introduction' },
		{ text: 'Standard 38 - Instructor Feedback', link: 'interaction/standard-38' },
		{ text: 'Standard 39 - Interaction', link: 'interaction/standard-39' },
		{ text: 'Standard 40 - Instructor Presence', link: 'interaction/standard-40' },
		{ text: 'Standard 41 - Class Community', link: 'interaction/standard-41' },
		{ text: 'Standard 42 - Learner to Learner Interaction', link: 'interaction/standard-42' },
		{ text: 'Standard 43 - Learner Contributions', link: 'interaction/standard-43' },

		{ text: 'Assessment and Feedback', header: true },
		{ text: 'Assessment Introduction', link: 'assessment/introduction' },
		{ text: 'Standard 44 - Course Grading Policy', link: 'assessment/standard-44' },
		{ text: 'Standard 45 - Learner Assessment', link: 'assessment/standard-45' },
		{ text: 'Standard 46 - Assignment to Grading Criteria', link: 'assessment/standard-46' },
		{ text: 'Standard 47 - Formative Assessment', link: 'assessment/standard-47' },
		{ text: 'Standard 48 - Assessment Accommodations', link: 'assessment/standard-48' },
		{ text: 'Standard 49 - Gradebook', link: 'assessment/standard-49' },
		{ text: 'Standard 50 - Course Feedback', link: 'assessment/standard-50' },

		{ text: 'Regular & Substantive Interaction', header: true },
		{ text: 'Standard 15', link: 'rsi/introduction' },

	],
};
