export const SITE = {
	name: 'Burnham Park · Baguio',
	title: 'Burnham Park Baguio — Opisyal na Gabay sa Bisita',
	description:
		'Ang 32.84-ektaryang luntiang parke sa gitna ng Baguio. Lahat ng kailangan mo: plano ng pagbisita, paradahan, kasaysayan, pinakamagandang oras, pagkain, at matutuluyan malapit sa Burnham Park.',
	language: 'fil',
	locale: 'fil_PH',
	siteUrl: 'https://burnhamparkbaguio.com',
	author: 'Burnham Park Baguio Editorial',
	ga4Id: 'G-HXM22WWPKP',
	address: 'Jose Abad Santos Dr, Baguio, 2600 Benguet, Pilipinas',
	coordinates: {
		lat: 16.4123795,
		lng: 120.5929704,
	},
	plusCode: 'CH6V+X5 Baguio, Benguet',
} as const;

export type NavItem = {
	label: string;
	href: `/${string}/` | '/';
};

export const NAV: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Plano ng Pagbisita', href: '/plano/' },
	{ label: 'Pagbiyahe at Paradahan', href: '/pagbiyahe/' },
	{ label: 'Kasaysayan', href: '/kasaysayan/' },
	{ label: 'Pinakamagandang Oras', href: '/oras/' },
	{ label: 'Pagkain', href: '/pagkain/' },
	{ label: 'Matutuluyan', href: '/matutuluyan/' },
	{ label: 'FAQ', href: '/faq/' },
];

export const KEY_INFO = [
	{ icon: 'ticket', label: 'Pagpasok', value: 'WALANG BAYAD', sub: 'Lahat ay malayang makakapasok' },
	{ icon: 'clock', label: 'Oras', value: '24 oras', sub: 'Ang mga panloob na kagamitan ay may sariling oras' },
	{ icon: 'stopwatch', label: 'Inirerekomenda', value: '3–4 na oras', sub: 'Para sa buong paglilibot' },
	{ icon: 'heart', label: 'Pinakamagandang oras', value: '6–10 ng umaga', sub: 'Malamig, payapa, at walang gaanong tao' },
] as const;

export type Cluster = {
	id: string;
	title: string;
	tagline: string;
	minutes: string;
	best: string[];
	description: string;
	image: string;
	imageAlt: string;
};

export const CLUSTERS: Cluster[] = [
	{
		id: 'lagoon',
		title: 'Burnham Lagoon',
		tagline: 'Puso ng Parke',
		minutes: '45 min',
		best: ['Pagsakay ng bangkang sisne', 'Pagkuha ng larawan', 'Magkapareha', 'Pamilya'],
		description:
			'Ang artipisyal na lawa sa gitna ng Burnham Park. Maaaring umarkila ng bangkang sisne o sagwan para sa 2–4 na tao. Perpekto para sa pamilya at magkapareha.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Burnham%20Lagoon%20Baguio%20swan%20paddle%20boats%20on%20calm%20lake%20pine%20trees%20reflection%20soft%20morning%20mist%20highlands%20scenic%20photography&image_size=landscape_16_9',
		imageAlt:
			'Burnham Lagoon na may mga bangkang sisne, repleksyon ng mga punong pino, at mahinang hamog sa madaling araw, Baguio City',
	},
	{
		id: 'rose-garden',
		title: 'Rose Garden',
		tagline: 'Bukid ng mga Rosas',
		minutes: '20 min',
		best: ['Namumukadkad Nobyembre–Marso', 'Pagkuha ng larawan', 'Mahinahong paglalakad'],
		description:
			'Mga hagdan-hagdang kama ng mga hybrid na rosas. Pinakamaganda ang kulay sa panahon ng taglamig ng Baguio. Madalas gamiting lugar para sa prenup shoot.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=terraced%20rose%20garden%20Burnham%20Park%20Baguio%20pink%20red%20yellow%20roses%20in%20bloom%20cool%20morning%20light%20pine%20trees%20highland%20botanical&image_size=landscape_4_3',
		imageAlt: 'Rose Garden ng Burnham Park na may makukulay na rosas sa hagdan-hagdang kama at mga punong pino',
	},
	{
		id: 'orchidarium',
		title: 'Orchidarium',
		tagline: 'Tahanan ng mga Orkidya',
		minutes: '15 min',
		best: ['Mga katutubong orkidya ng Cordillera', 'Payapa at malamig', 'Mahilig sa halaman'],
		description:
			'Lilim na enclosure ng mga orkidyas mula sa bulubundukin ng Cordillera — mga dendrobium at vanda. Sariwa at mahalumigmig ang hangin sa loob.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=orchidarium%20shaded%20wooden%20frames%20dendrobium%20vanda%20orchids%20damp%20moss%20cool%20highland%20garden%20Burnham%20Park%20Baguio&image_size=landscape_4_3',
		imageAlt: 'Orchidarium ng Burnham Park na may mga nakasabit na orkidya sa lilim na kahoy na rehas',
	},
	{
		id: 'athletic-bowl',
		title: 'Athletic Bowl',
		tagline: 'Palakasan at Pag-eehersisyo',
		minutes: '30 min',
		best: ['Jogging tuwing umaga', 'Basketball', 'Football', 'Archery'],
		description:
			'Oval na takbuhan, bakuran ng basketball, at iba pang pasilidad pang-palakasan. Dito nag-eehersisyo ang mga lokal na mamamayan tuwing madaling araw.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Burnham%20Park%20Athletic%20Bowl%20oval%20running%20track%20joggers%20pine%20trees%20morning%20sunlight%20Baguio%20sports%20facility&image_size=landscape_16_9',
		imageAlt: 'Athletic Bowl ng Burnham Park na may mga nagjo-jogging sa oval track sa madaling araw',
	},
	{
		id: 'melvin-jones',
		title: 'Melvin Jones Grandstand',
		tagline: 'Likas na Lunan',
		minutes: '25 min',
		best: ['Panagbenga Flower Festival', 'Palaro ng football', 'Pagpapalipad ng saranggola', 'Paglubog ng araw'],
		description:
			'Malawak na luntiang parang sa silangang bahagi ng parke. Dito ginaganap ang grand float parade ng Panagbenga tuwing Pebrero. Magagandang silweta ng pino tuwing hapon.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Melvin%20Jones%20Grandstand%20Burnham%20Park%20Baguio%20wide%20green%20field%20pine%20tree%20silhouettes%20golden%20sunset%20light%20peaceful%20highland&image_size=landscape_16_9',
		imageAlt:
			'Melvin Jones Grandstand na may malawak na luntiang parang at silweta ng mga punong pino sa oras ng paglubog ng araw',
	},
	{
		id: 'skating-rink',
		title: 'Skating Rink',
		tagline: 'Roller Skate Plaza',
		minutes: '30 min',
		best: ['Mga kabataan', 'Baguhan at bihasa', 'May upa ng skate'],
		description:
			'Sementadong palaruan ng roller skate. Maraming kabataang nag-eensayo ng trick, at mga magulang na nanonood sa gilid na bangko.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=outdoor%20concrete%20roller%20skating%20rink%20Burnham%20Park%20Baguio%20teenagers%20skating%20pine%20trees%20around%20casual%20friendly&image_size=landscape_4_3',
		imageAlt: 'Skating Rink ng Burnham Park na may mga kabataang naka-roller skate sa sementadong plaza',
	},
	{
		id: 'childrens-playground',
		title: 'Children\u2019s Playground',
		tagline: 'Lugar para sa Bata',
		minutes: '25 min',
		best: ['Pamilya na may maliliit na anak', 'Duuyan at slide', 'Pagsakay sa maliit na kabayo'],
		description:
			'Mga duyan, slide, at palaruan para sa maliliit na bata. May pasakay ng maliit na kabayo na may maikling ikot para sa litrato.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=children%20playground%20Burnham%20Park%20Baguio%20colorful%20swings%20slides%20pine%20trees%20families%20with%20kids%20joyful%20morning&image_size=landscape_4_3',
		imageAlt: "Children's Playground na may makukulay na slide at duyan, pamilyang naglalaro sa ilalim ng mga pino",
	},
	{
		id: 'igorot-garden',
		title: 'Igorot Garden',
		tagline: 'Kultura ng mga Katutubo',
		minutes: '15 min',
		best: ['Estatwa ng mga mandirigmang Igorot', 'Bahay na bato', 'Paggalang sa kultura ng Cordillera'],
		description:
			'Maliliit na estatwa ng mga mandirigmang Igorot at tradisyunal na bahay na bato, bilang pagkilala sa katutubong kultura ng mga taga-Cordillera.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Igorot%20Garden%20Burnham%20Park%20stone%20warrior%20statues%20traditional%20Cordillera%20huts%20pine%20trees%20cultural%20heritage%20sculpture&image_size=landscape_4_3',
		imageAlt: 'Igorot Garden na may mga estatwang bato ng mandirigma at tradisyunal na bahay ng mga katutubo',
	},
	{
		id: 'japanese-peace',
		title: 'Japanese Peace Tower',
		tagline: 'Hardin ng Kapayapaan',
		minutes: '15 min',
		best: ['Tahimik na sulok', 'Japanese style garden', 'Koi pond'],
		description:
			'Tahimik na hardin sa istilong Hapon na may lawa ng koi. Alaala ng kapayapaan ng Pilipinas at Hapon.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20Peace%20Park%20garden%20Burnham%20Park%20Baguio%20koi%20pond%20stone%20lanterns%20zen%20style%20pine%20trees%20quiet%20meditation&image_size=landscape_4_3',
		imageAlt: 'Japanese Peace Tower garden na may koi pond, batong parol, at istilong zen na hardin',
	},
	{
		id: 'picnic-grove',
		title: 'Picnic Grove at Pine Grove',
		tagline: 'Lugar para sa Piknik',
		minutes: '60 min',
		best: ['Magkakaibigan at pamilya', 'Ilalim ng matatayog na pino', 'Nagdadala ng sariling pagkain'],
		description:
			'Malapad na lugar sa ilalim ng mga punong pino na perpekto para sa piknik ng buong pamilya o magkakaibigan. Maaaring maglatag ng banig at magpahinga nang mahaba.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=picnic%20grove%20pine%20trees%20Burnham%20Park%20Baguio%20families%20blankets%20on%20grass%20dappled%20shade%20tall%20Benguet%20pine%20sunlight&image_size=landscape_16_9',
		imageAlt: 'Picnic Grove na may mga matatayog na punong pino at pamilyang nagpipiknik sa damuhan',
	},
	{
		id: 'pine-trees-world',
		title: 'Pine Trees of the World',
		tagline: 'Mga Pino sa Buong Mundo',
		minutes: '15 min',
		best: ['Mahilig sa puno', 'Maikling paglalakad', 'Edukasyon para sa bata'],
		description:
			'Nagtitipon ng mga iba\'t ibang uri ng punong pino mula sa iba\'t ibang bansa. Isang tahimik at makahulugang bahagi ng parke.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Pine%20Trees%20of%20the%20World%20Burnham%20Park%20Baguio%20assorted%20pine%20tree%20species%20informative%20garden%20path%20botanical%20cool%20climate&image_size=landscape_4_3',
		imageAlt: 'Pine Trees of the World na may mga iba\'t ibang uri ng punong pino at daanan sa hardin',
	},
	{
		id: 'burnham-bust',
		title: 'Burnham Bust at Marker',
		tagline: 'Alaala ng Arkitekto',
		minutes: '5 min',
		best: ['Kasaysayan ni Daniel Burnham', 'Litratong may kasaysayan'],
		description:
			'Bust o rebulto ng ulo ni Daniel Hudson Burnham, ang Amerikanong arkitekto na nagplano ng lungsod ng Baguio, kasama ang isang plake ng pagkilala.',
		image:
			'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Daniel%20Burnham%20bust%20monument%20bronze%20plaque%20Burnham%20Park%20Baguio%20pine%20trees%20historic%20marker%20dignified%20memorial&image_size=square',
		imageAlt: 'Bronze bust ni Daniel Burnham na may plake sa gilid ng Burnham Park, Baguio',
	},
];

export type SeasonInfo = {
	id: string;
	title: string;
	months: string;
	temp: string;
	rain: string;
	crowd: string;
	vibe: string;
	pros: string[];
	cons: string[];
};

export const SEASONS: SeasonInfo[] = [
	{
		id: 'taglamig-tuyot',
		title: 'Taglamig na Tuyot',
		months: 'Nobyembre \u2013 Pebrero',
		temp: '10\u201323°C',
		rain: 'Kaunti lang',
		crowd: 'Maraming tao (tuwing Pasko at Panagbenga)',
		vibe: 'Malamig, sariwa ang hangin, rosas ay namumukadkad',
		pros: ['Pinakamalamig at pinakamagandang panahon', 'Panagbenga Festival tuwing Pebrero', 'Puno ng rosas ang Rose Garden'],
		cons: ['Maraming bisita kaya mahirap magparada', 'Maaaring umabot ng 10°C gabi'],
	},
	{
		id: 'taginit-tuyot',
		title: 'Tag-init na Tuyot',
		months: 'Marso \u2013 Abril',
		temp: '15\u201326°C',
		rain: 'Bihirang umulan',
		crowd: 'Siksikan (bakasyon ng paaralan)',
		vibe: 'Mas mainit, maaraw, bakasyon ng pamilya',
		pros: ['Kadalasan ay maaraw', 'Magandang panahon para sa piknik at pagbibisikleta'],
		cons: ['Pinakamainit na buwan, maaaring umabot ng ~30°C', 'Mahabang pila sa bangka at paradahan'],
	},
	{
		id: 'tagulan',
		title: 'Panahon ng Ulan',
		months: 'Hunyo \u2013 Oktubre',
		temp: '15\u201324°C',
		rain: 'Madalas, 300\u2013825 mm/buwan',
		crowd: 'Kaunti ang tao',
		vibe: 'Mahalumigmig, hamog, kadalasang maulap',
		pros: ['Pinakamurang tirahan at kakaunti ang tao', 'Magandang silweta ng hamog sa paligid'],
		cons: ['Puwedeng maantala ang mga aktibidad sa tubig', 'Maaaring madulas ang mga daanan'],
	},
];

export type Bite = {
	id: string;
	name: string;
	price: string;
	where: string;
	note: string;
};

export const BITES: Bite[] = [
	{
		id: 'strawberry-taho',
		name: 'Strawberry Taho',
		price: 'Murang meryenda',
		where: 'Mga naglalako sa pasukan ng parke at gilid ng Lagoon',
		note:
			'Sariwang tofu na may strawberry syrup galing sa La Trinidad, Benguet. Higit sa lahat, ito ang lagda ng Baguio.',
	},
	{
		id: 'mais',
		name: 'Inihaw na Mais',
		price: 'Napakamura',
		where: 'Mga tindero sa paligid ng parke',
		note: 'Buong mais na inihaw sa uling, pinapahiran ng mantikilya.',
	},
	{
		id: 'ube-halaya',
		name: 'Ube Halaya',
		price: 'Mababa \u2013 Katamtaman',
		where: 'Public Market ng Baguio at mga panaderya',
		note: 'Matamis at malinamnam na jam mula sa purple yam, kilalang produkto ng Baguio.',
	},
	{
		id: 'longganisa',
		name: 'Baguio Longganisa',
		price: 'Mababa \u2013 Katamtaman',
		where: 'Mga lokal na kainan at almusalan',
		note: 'Lokal na sausage na may bawang at tamis na timpla.',
	},
	{
		id: 'pinikpikan',
		name: 'Pinikpikan',
		price: 'Katamtaman',
		where: 'Mga restawran ng pagkaing Cordillera (hal. Farmer\u2019s Daughter)',
		note:
			'Tradisyunal na putahe ng manok ng mga taga-Cordillera. May kakaibang lasa mula sa usok at pampalasa.',
	},
	{
		id: 'ensaladang-pako',
		name: 'Ensaladang Pako',
		price: 'Mababa \u2013 Katamtaman',
		where: 'Mga lokal na kainan',
		note: 'Ensalada ng mga ligaw na dahon ng pako, kamatis, at katas ng kalamansi.',
	},
	{
		id: 'shake',
		name: 'Strawberry o Ube Shake',
		price: 'Mababa',
		where: 'Mga tindahan ng inumin sa parke',
		note: 'Lamig at sariwang gawa na shake mula sa mga lokal na prutas.',
	},
	{
		id: 'sundot-kulangot',
		name: 'Sundot Kulangot',
		price: 'Napakamura',
		where: 'Public Market at mga pasalubong shop',
		note: 'Maliit na kakanin na nakabalot sa kawayan. Kawili-wiling pangalan, matamis na meryenda.',
	},
];

export type Restaurant = {
	id: string;
	name: string;
	distance: string;
	price: 'budget' | 'mid' | 'premium';
	signature: string[];
	why: string;
};

export const RESTAURANTS: Restaurant[] = [
	{
		id: 'cafe-ruins',
		name: 'Caf\u00e9 by the Ruins',
		distance: '500 m pa-kanluran',
		price: 'mid',
		signature: ['Baguio Bagnet', 'Camote Bread'],
		why: 'Isa sa pinakamatandang restawran sa Baguio. Rustik na kahoy na palamuti, may dating panitikan at sining.',
	},
	{
		id: 'good-taste',
		name: 'Good Taste Caf\u00e9',
		distance: '600 m malapit sa Session Rd',
		price: 'budget',
		signature: ['Buttered Chicken', 'Chop Suey'],
		why: 'Paborito ng mga lokal. Napakalaking serving at abot-kayang presyo. Bukas 24 oras.',
	},
	{
		id: 'oh-my-gulay',
		name: 'Oh My Gulay',
		distance: '800 m sa Session Rd',
		price: 'mid',
		signature: ['Anak ng Putanesca', 'Kabute Fritters'],
		why: 'Lahat ay gulay at sining. Artist caf\u00e9 sa itaas ng La Azotea Building.',
	},
	{
		id: 'hill-station',
		name: 'Hill Station',
		distance: '1.2 km sa Upper Session Rd',
		price: 'premium',
		signature: ['Home-made Meatloaf', 'Moroccan Spiced Stew'],
		why: 'Sa loob ng Casa Vallejo, ang pinakamatandang gusali ng Baguio. Award-winning na pagkain.',
	},
	{
		id: 'farmers-daughter',
		name: 'Farmer\u2019s Daughter',
		distance: '3 km patungong Tam-awan Village',
		price: 'mid',
		signature: ['Pinikpikan', 'Pinuneg', 'Binungor'],
		why: 'Pinakamainam na tunay na pagkaing Cordillera. Rustik na kapaligiran, damang-dama ang kultura.',
	},
	{
		id: 'arcas-yard',
		name: 'Arca\u2019s Yard',
		distance: '3 km sa Ambuklao Rd',
		price: 'mid',
		signature: ['Camote Pie', 'Arca\u2019s Cloud Tea'],
		why: 'Maliit na kubo sa bundok na may magandang tanawin. Perpekto para sa tahimik na meryenda.',
	},
	{
		id: 'choco-batirol',
		name: 'Choco-late de Batirol',
		distance: '3 km sa Camp John Hay',
		price: 'mid',
		signature: ['Tsokolate eh', 'Bibingka'],
		why: 'Tradisyunal na mainit na tsokolate na gawa sa batirol, kasama ang mainit na bibingka.',
	},
	{
		id: '50s-diner',
		name: "50's Diner",
		distance: '1 km sa General Luna Rd',
		price: 'mid',
		signature: ['Giant Banana Split', 'American classics'],
		why: 'Retro diner sa istilong 1950s. Masarap ang milkshake at panghimagas ng mga kabataan.',
	},
];

export type Hotel = {
	id: string;
	name: string;
	distance: string;
	walk: string;
	tier: 'walkable' | 'budget' | 'scenic';
	price: string;
	fits: string[];
	highlights: string[];
};

export const HOTELS: Hotel[] = [
	{
		id: 'venus-parkview',
		name: 'Venus Parkview Hotel',
		distance: '272 m',
		walk: '5 minuto',
		tier: 'walkable',
		price: 'Katamtaman (4-bituin)',
		fits: ['Magkapareha', 'Pamilya'],
		highlights: ['May balkonaheng tanaw ang parke', 'Sariling restawran', '24-oras na tanggapan'],
	},
	{
		id: 'tuscany-basic',
		name: 'Tuscany Basic Urban Stay',
		distance: '140 m',
		walk: '2 minuto',
		tier: 'walkable',
		price: 'Matipid',
		fits: ['Bakasyonista', 'Mag-isang manlalakbay'],
		highlights: ['Pinakamalapit na hotel sa parke', 'Payak at malinis na kuwarto'],
	},
	{
		id: 'travelite-express',
		name: 'Travelite Express Hotel',
		distance: '130 m',
		walk: '2 minuto',
		tier: 'walkable',
		price: 'Matipid',
		fits: ['Pamilya', 'Barkada'],
		highlights: ['May paradahan', '24-oras na serbisyo', 'Malapit sa jeepney stop'],
	},
	{
		id: 'henrico-kisad',
		name: 'Hotel Henrico Kisad',
		distance: '170 m',
		walk: '3 minuto',
		tier: 'walkable',
		price: 'Matipid',
		fits: ['Lokal na bakasyon', 'Mga kumperensya'],
		highlights: ['Malapit sa Kisad Road na mga kainan', 'May sariling restawran'],
	},
	{
		id: 'burnham-suites',
		name: 'Baguio Burnham Suites',
		distance: '250 m',
		walk: '4 minuto',
		tier: 'walkable',
		price: 'Katamtaman',
		fits: ['Matagal na pananatili', 'Pamilya'],
		highlights: ['Malalawak na suite', 'May kusina para sa mahabang pananatili'],
	},
	{
		id: '456-hotel',
		name: '456 Hotel',
		distance: '770 m',
		walk: '10\u201312 minuto',
		tier: 'budget',
		price: 'Matipid',
		fits: ['Malaking grupo', 'Backpacker'],
		highlights: ['May tindahan at cafe sa loob', 'May libreng paradahan', '24 oras na bukas'],
	},
	{
		id: 'microtel-wyndham',
		name: 'Microtel by Wyndham Baguio',
		distance: '1.23 km',
		walk: 'Sasakyan ng 5 min',
		tier: 'budget',
		price: 'Katamtaman',
		fits: ['Pamilya', 'Corporate travel'],
		highlights: ['International brand', 'Komportable at malinis', 'Family room'],
	},
	{
		id: 'azalea',
		name: 'Azalea Hotels & Residences',
		distance: '1.5 km',
		walk: 'Sasakyan ng 5\u201310 min',
		tier: 'scenic',
		price: 'Katamtaman \u2013 Mahal',
		fits: ['Malaking pamilya', '8 katao hanggang'],
		highlights: ['Multi-bedroom serviced apartments', 'Tahimik na lokasyon', 'May kusina at sala'],
	},
	{
		id: 'casa-vallejo',
		name: 'Casa Vallejo / Hill Station',
		distance: '1.2 km',
		walk: '15 minuto o taksi',
		tier: 'scenic',
		price: 'Mahal',
		fits: ['Kasaysayang buff', 'Magkapareha'],
		highlights: ['Pinakamatandang hotel ng Baguio', 'Heritage building', 'Hill Station restaurant'],
	},
];

export type Faq = {
	q: string;
	a: string;
};

export const FAQS: Faq[] = [
	{
		q: 'Kailangan bang magbayad para makapasok sa Burnham Park?',
		a: 'Hindi. Ang Burnham Park ay LIBRE para sa lahat ng bisita. Ang mga indibidwal na aktibidad tulad ng bangka, bisikleta, at skating ay may sariling bayad sa lugar.',
	},
	{
		q: 'Bukas ba ang Burnham Park ng 24 oras?',
		a: 'Oo, ang parke mismo ay bukas 24/7. Ngunit ang mga tindahan, upa ng bangka at bisikleta, at ang Rose Garden / Orchidarium ay may sariling oras (karaniwang 7 ng umaga hanggang 6 ng gabi).',
	},
	{
		q: 'Maaari bang pumasok ang mga naka-wheelchair sa Burnham Park?',
		a: 'Oo. Ang mga pangunahing daan ay sementado at may mga rampa sa mga pangunahing pasukan. Ang ilang malalayong bahagi (tulad ng malalim na Orchidarium) ay may kaunting hagdan, kaya manatili sa paligid ng Lagoon para sa pinakamadaling pagdaan.',
	},
	{
		q: 'Pinapayagan ba ang mga alagang hayop (aso) sa Burnham Park?',
		a: 'Pinapayagan ang mga alagang hayop basta\u2019t may tali at ang malalaking aso ay may suot na maskara sa bibig, ayon sa karaniwang tuntunin ng Baguio para sa pampublikong lugar. Suriin ang pinakabagong palatandaan sa pasukan bago pumasok.',
	},
	{
		q: 'May mga palikuran ba sa loob ng Burnham Park?',
		a: 'Oo, may mga pampublikong palikuran sa ilang pasukan at paligid ng Lagoon. Karaniwang may bayad na maliit na halaga para sa paggamit. Ang mga palikuran malapit sa pangunahing pasukan ay mas maayos kaysa sa mga nasa malalayong bahagi.',
	},
	{
		q: 'Saan ang pinakamagandang paradahan malapit sa Burnham Park?',
		a: 'Limitado ang paradahan sa kalye sa paligid ng parke. Kapag puno na, ang pinakamainam ay ang SM City Baguio multi-storey parking (mga 10\u201315 minutong lakad o isang jeepney na biyahe). Maaari ring itanong sa hotel kung may libreng paradahan.',
	},
	{
		q: 'Ligtas ba ang Burnham Park sa gabi?',
		a: 'Ligtas ito tuwing araw at maagang gabi dahil may mga nagbabantay. Pagkalipas ng 10 ng gabi, mas mabuting manatili lamang sa mga maliwanag na pangunahing daan at huwag mag-isa sa mga madidilim na bahagi ng kagubatan.',
	},
	{
		q: 'Maaari ba akong magpalipad ng drone sa loob ng Burnham Park?',
		a: 'Kailangan mong humingi ng paunang pahintulot sa Pamahalaang Lungsod ng Baguio at sa CAAP (Civil Aviation Authority of the Philippines). Huwag magpalipad nang walang permiso.',
	},
	{
		q: 'Ano ang dapat kong isuot sa Burnham Park?',
		a: 'Komportableng sapatos na pantakbo at damit na may jacket o sweater, lalo na kung madaling araw o gabi ka pupunta. Ang panahon ng Baguio ay maaaring bumaba ng 10\u201315°C tuwing Nobyembre\u2013Pebrero.',
	},
	{
		q: 'Maaari ba akong magdala ng sariling pagkain at inumin?',
		a: 'Oo. Maaari kang magdala ng sariling piknik. May mga tindero rin ng meryenda tulad ng strawberry taho at inihaw na mais sa loob ng parke. Huwag kalimutang itapon ang basura sa tamang lugar.',
	},
	{
		q: 'May Wi-Fi ba sa Burnham Park?',
		a: 'Walang libreng pampublikong Wi-Fi ang parke, ngunit ang lahat ng malalaking mobile operator sa Pilipinas (Globe, Smart, DITO) ay may malakas na 4G/5G signal sa gitna ng Baguio.',
	},
	{
		q: 'May mga panuntunan ba laban sa paninigarilyo o alak?',
		a: 'Oo. Ayon sa Administrative Order 21 ng Baguio, IPINAGBABAWAL ang paninigarilyo at pag-inom ng alak sa loob ng Burnham Park. May mga nagpapatupad nito.',
	},
	{
		q: 'Kailan ang Panagbenga Festival at paano ito makakaapekto sa aking pagbisita?',
		a: 'Ang Panagbenga o Baguio Flower Festival ay tuwing Pebrero. Ang grand float parade ay ginaganap sa Melvin Jones Grandstand. Asahan ang napakaraming tao, trapik, at pagtaas ng presyo ng hotel sa buwang ito.',
	},
	{
		q: 'Magkano ang upa ng bangka at bisikleta sa Burnham Park?',
		a: 'Ang upa ng bangkang sisne ay karaniwang nasa \u20b1150\u2013200 para sa 30 minuto (2\u20134 na tao). Ang bisikleta ay \u20b130\u201350 kada oras para sa single. Maaaring magbago ang presyo tuwing katapusan o pista, kaya magtanong sa lugar.',
	},
	{
		q: 'Mayroon bang nursing room o palitan ng diaper para sa sanggol?',
		a: 'Walang pormal na nursing room sa parke. Maaaring gumamit ng malinis na sulok sa mga restawran sa paligid (Caf\u00e9 by the Ruins, SM City Baguio) para sa mga pangangailangan ng sanggol.',
	},
];

export const PAGE_META: Record<
	string,
	{ title: string; description: string; eyebrow: string; hero: string; heroAlt: string }
> = {
	home: {
		title: 'Burnham Park Baguio — Opisyal na Gabay sa Bisita',
		description:
			'Ang 32.84-ektaryang luntiang parke sa gitna ng Baguio. Gabay sa bangka, bisikleta, hardin, paradahan, pagkain, at matutuluyan malapit sa Burnham Park.',
		eyebrow: 'Burnham Park · Lungsod ng Baguio',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Burnham%20Park%20Baguio%20aerial%20wide%20panorama%20man%20made%20lagoon%20swan%20boats%20pine%20forest%20city%20skyline%20backdrop%20early%20morning%20mist%20golden%20hour%20scenic%20travel%20photography&image_size=landscape_16_9',
		heroAlt:
			'Malapad na tanawin ng Burnham Park Baguio sa madaling araw: luntiang mga punong pino, lawa ng lagoon, at mga bangkang sisne sa gitna ng lungsod',
	},
	plano: {
		title: 'Plano ng Pagbisita sa Burnham Park · Ruta at Gawain',
		description:
			'Gaano katagal dapat manatili, pinakamagandang ruta sa paglalakad at pagbibisikleta, upa ng bangka at bisikleta, at mga paalala bago bumisita.',
		eyebrow: 'Plano ng Pagbisita',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=family%20riding%20bikes%20Burnham%20Park%20paved%20path%20pine%20trees%20both%20sides%20sunlight%20dappled%20morning%20joyful%20Baguio%20recreation&image_size=landscape_16_9',
		heroAlt: 'Pamilyang nagbibisikleta sa sementadong daanan ng Burnham Park, sa pagitan ng mga punong pino sa madaling araw',
	},
	pagbiyahe: {
		title: 'Pagbiyahe at Paradahan · Paano Pumunta sa Burnham Park',
		description:
			'Mula sa Manila: jeepney, taksi, Grab, bus, at eroplano patungong Baguio. Tunay na kalagayan ng paradahan sa paligid ng Burnham Park.',
		eyebrow: 'Pagbiyahe at Paradahan',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=colorful%20Filipino%20jeepney%20Baguio%20City%20street%20pine%20trees%20burnham%20park%20entrance%20local%20public%20transport%20photography&image_size=landscape_16_9',
		heroAlt: 'Makukulay na jeepney sa kalsada ng Baguio City malapit sa pasukan ng Burnham Park, kasama ang mga punong pino',
	},
	kasaysayan: {
		title: 'Kasaysayan ng Burnham Park · Daniel Burnham at ang 12 na Sona',
		description:
			'Kasaysayan ng Burnham Park mula sa plano ni Daniel Burnham noong 1905, ang lupain ng mga Ibaloi, ang 12 na bahagi ng parke, at ang mga puno at halaman nito.',
		eyebrow: 'Kasaysayan at Pamana',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage%20historic%20black%20and%20white%20photograph%20Burnham%20Park%20Baguio%20early%201900s%20colonial%20architecture%20pine%20trees%20american%20planner%20heritage&image_size=landscape_16_9',
		heroAlt: 'Larawang pang-kasaysayan ng Burnham Park noong unang bahagi ng 1900s: mga punong pino, istilong Amerikano, at dating parke',
	},
	oras: {
		title: 'Pinakamagandang Oras na Bumisita sa Burnham Park',
		description:
			'Pinakamagandang buwan (Nobyembre\u2013Pebrero), araw (Lunes\u2013Biyernes), at oras (6\u201310 ng umaga), pati na ang Panagbenga Festival tuwing Pebrero.',
		eyebrow: 'Pinakamagandang Oras',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Burnham%20Park%20Baguio%20sunset%20golden%20hour%20Melvin%20Jones%20field%20silhouettes%20pine%20trees%20kites%20flying%20warm%20light%20peaceful&image_size=landscape_16_9',
		heroAlt: 'Paglubog ng araw sa Melvin Jones Grandstand, Burnham Park: mga silweta ng pino at saranggola sa langit na kulay ginto',
	},
	pagkain: {
		title: 'Pagkain Malapit sa Burnham Park · Meryenda at Restawran',
		description:
			'Kung saan makakakita ng tunay na strawberry taho, pinikpikan, at ang pinakamagandang restawran sa Session Road at paligid ng Burnham Park.',
		eyebrow: 'Pagkain at Meryenda',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=strawberry%20taho%20Filipino%20silken%20tofu%20snack%20fresh%20strawberry%20syrup%20Baguio%20City%20vendor%20outdoor%20closeup%20food%20photography%20authentic&image_size=landscape_16_9',
		heroAlt: 'Strawberry taho ng Baguio: mainit na tofu na may makapal na strawberry syrup at sago, tapat na larawan ng meryenda',
	},
	matutuluyan: {
		title: 'Matutuluyan Malapit sa Burnham Park · Hotel at Pension',
		description:
			'Mga hotel na 2 minutong lakad lamang, matipid na opsyon, at mga magagandang heritage stay — na inayos ayon sa layo, presyo, at angkop sa pamilya.',
		eyebrow: 'Matutuluyan',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Baguio%20city%20view%20hotel%20balcony%20overlooking%20Burnham%20Park%20pine%20trees%20foggy%20morning%20mountains%20background%20cozy%20wooden%20room&image_size=landscape_16_9',
		heroAlt: 'Tingin mula sa balkonahe ng hotel sa Baguio na nakatanaw sa Burnham Park, mga pino, at hamog sa kabundukan',
	},
	faq: {
		title: 'FAQ tungkol sa Burnham Park · 15 Pinakamadalas Itanong',
		description:
			'Bayad sa pagpasok? Oras? Wheelchair? Aso? Paradahan? Drone? Paninigarilyo? — Lahat ng totoong sagot bago bumisita sa Burnham Park.',
		eyebrow: 'Mga Madalas Itanong',
		hero: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Burnham%20Park%20wide%20peaceful%20scene%20pine%20avenue%20benches%20people%20sitting%20calm%20overcast%20day%20Baguio%20highland%20scenic%20urban%20park&image_size=landscape_16_9',
		heroAlt: 'Tahimik na tanawin ng Burnham Park: mahabang hanay ng mga pino, mga bangko, at mga taong nagpapahinga sa damuhan',
	},
};
