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
	ogImageDefault:
		'https://images.unsplash.com/photo-1515894203077-9cd360321c6a?auto=format&fit=crop&w=1600&q=80',
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
	category?: string;
};

const U = (id: string, w = 1600) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const CLUSTERS: Cluster[] = [
	{
		id: 'lagoon',
		title: 'Burnham Lagoon',
		tagline: 'Puso ng Parke',
		minutes: '45 min',
		best: ['Pagsakay ng bangkang sisne', 'Pagkuha ng larawan', 'Magkapareha', 'Pamilya'],
		category: 'family',
		description:
			'Ang artipisyal na lawa sa gitna ng Burnham Park. Maaaring umarkila ng bangkang sisne o sagwan para sa 2–4 na tao. Perpekto para sa pamilya at magkapareha.',
		image: U('photo-1515894203077-9cd360321c6a'),
		imageAlt:
			'Burnham Lagoon swan paddle boats on calm water, pine trees reflection at sunrise — Burnham Park Baguio tourist guide',
	},
	{
		id: 'rose-garden',
		title: 'Rose Garden',
		tagline: 'Bukid ng mga Rosas',
		minutes: '20 min',
		best: ['Namumukadkad Nobyembre–Marso', 'Pagkuha ng larawan', 'Mahinahong paglalakad'],
		category: 'nature',
		description:
			'Mga hagdan-hagdang kama ng mga hybrid na rosas. Pinakamaganda ang kulay sa panahon ng taglamig ng Baguio. Madalas gamiting lugar para sa prenup shoot.',
		image: U('photo-1490750967868-88aa4486c946'),
		imageAlt: 'Terraced rose garden with pink red yellow roses in cool morning light — Burnham Park Rose Garden Baguio',
	},
	{
		id: 'orchidarium',
		title: 'Orchidarium',
		tagline: 'Tahanan ng mga Orkidya',
		minutes: '15 min',
		best: ['Mga katutubong orkidya ng Cordillera', 'Payapa at malamig', 'Mahilig sa halaman'],
		category: 'nature',
		description:
			'Lilim na enclosure ng mga orkidyas mula sa bulubundukin ng Cordillera — mga dendrobium at vanda. Sariwa at mahalumigmig ang hangin sa loob.',
		image: U('photo-1465146634408-991e0c42e742'),
		imageAlt: 'Shaded orchidarium with dendrobium and vanda orchids in wooden frames — Burnham Park Orchidarium Baguio',
	},
	{
		id: 'athletic-bowl',
		title: 'Athletic Bowl',
		tagline: 'Palakasan at Pag-eehersisyo',
		minutes: '30 min',
		best: ['Jogging tuwing umaga', 'Basketball', 'Football', 'Archery'],
		category: 'sports',
		description:
			'Oval na takbuhan, bakuran ng basketball, at iba pang pasilidad pang-palakasan. Dito nag-eehersisyo ang mga lokal na mamamayan tuwing madaling araw.',
		image: U('photo-1571019613454-1cb2f99b2d8b'),
		imageAlt: 'Athletic oval running track with joggers under pine trees morning sunlight — Burnham Park Athletic Bowl Baguio sports',
	},
	{
		id: 'melvin-jones',
		title: 'Melvin Jones Grandstand',
		tagline: 'Likas na Lunan',
		minutes: '25 min',
		best: ['Panagbenga Flower Festival', 'Palaro ng football', 'Pagpapalipad ng saranggola', 'Paglubog ng araw'],
		category: 'family',
		description:
			'Malawak na luntiang parang sa silangang bahagi ng parke. Dito ginaganap ang grand float parade ng Panagbenga tuwing Pebrero. Magagandang silweta ng pino tuwing hapon.',
		image: U('photo-1473448912268-2022ce9509d8'),
		imageAlt:
			'Melvin Jones Grandstand wide green field pine tree silhouettes golden sunset — Burnham Park Baguio Panagbenga venue',
	},
	{
		id: 'skating-rink',
		title: 'Skating Rink',
		tagline: 'Roller Skate Plaza',
		minutes: '30 min',
		best: ['Mga kabataan', 'Baguhan at bihasa', 'May upa ng skate'],
		category: 'sports',
		description:
			'Sementadong palaruan ng roller skate. Maraming kabataang nag-eensayo ng trick, at mga magulang na nanonood sa gilid na bangko.',
		image: U('photo-1526047932273-341f2a7631f9'),
		imageAlt: 'Outdoor concrete roller skating rink teenagers casual fun — Burnham Park Skating Rink Baguio recreation',
	},
	{
		id: 'childrens-playground',
		title: 'Children\u2019s Playground',
		tagline: 'Lugar para sa Bata',
		minutes: '25 min',
		best: ['Pamilya na may maliliit na anak', 'Duuyan at slide', 'Pagsakay sa maliit na kabayo'],
		category: 'family',
		description:
			'Mga duyan, slide, at palaruan para sa maliliit na bata. May pasakay ng maliit na kabayo na may maikling ikot para sa litrato.',
		image: U('photo-1518602164578-cd0074062767'),
		imageAlt: "Colorful children's playground swings slides families with kids joyful morning — Burnham Park Baguio playground",
	},
	{
		id: 'igorot-garden',
		title: 'Igorot Garden',
		tagline: 'Kultura ng mga Katutubo',
		minutes: '15 min',
		best: ['Estatwa ng mga mandirigmang Igorot', 'Bahay na bato', 'Paggalang sa kultura ng Cordillera'],
		category: 'nature',
		description:
			'Maliliit na estatwa ng mga mandirigmang Igorot at tradisyunal na bahay na bato, bilang pagkilala sa katutubong kultura ng mga taga-Cordillera.',
		image: U('photo-1528127269323-49458a486e23'),
		imageAlt: 'Igorot Garden stone warrior statues traditional Cordillera huts heritage — Burnham Park Baguio cultural site',
	},
	{
		id: 'japanese-peace',
		title: 'Japanese Peace Tower',
		tagline: 'Hardin ng Kapayapaan',
		minutes: '15 min',
		best: ['Tahimik na sulok', 'Japanese style garden', 'Koi pond'],
		category: 'nature',
		description:
			'Tahimik na hardin sa istilong Hapon na may lawa ng koi. Alaala ng kapayapaan ng Pilipinas at Hapon.',
		image: U('photo-1503919545889-aef636e10afa'),
		imageAlt: 'Japanese zen garden koi pond stone lanterns quiet meditation — Burnham Park Japanese Peace Tower Baguio',
	},
	{
		id: 'picnic-grove',
		title: 'Picnic Grove at Pine Grove',
		tagline: 'Lugar para sa Piknik',
		minutes: '60 min',
		best: ['Magkakaibigan at pamilya', 'Ilalim ng matatayog na pino', 'Nagdadala ng sariling pagkain'],
		category: 'family',
		description:
			'Malapad na lugar sa ilalim ng mga punong pino na perpekto para sa piknik ng buong pamilya o magkakaibigan. Maaaring maglatag ng banig at magpahinga nang mahaba.',
		image: U('photo-1533240332313-0db49b459ad6'),
		imageAlt: 'Picnic grove tall Benguet pine trees families blankets on grass dappled shade — Burnham Park Picnic Grove Baguio',
	},
	{
		id: 'pine-trees-world',
		title: 'Pine Trees of the World',
		tagline: 'Mga Pino sa Buong Mundo',
		minutes: '15 min',
		best: ['Mahilig sa puno', 'Maikling paglalakad', 'Edukasyon para sa bata'],
		category: 'nature',
		description:
			'Nagtitipon ng mga iba\'t ibang uri ng punong pino mula sa iba\'t ibang bansa. Isang tahimik at makahulugang bahagi ng parke.',
		image: U('photo-1441974231531-c6227db76b6e'),
		imageAlt: 'Pine Trees of the World assorted botanical pine species garden path — Burnham Park Baguio educational walk',
	},
	{
		id: 'burnham-bust',
		title: 'Burnham Bust at Marker',
		tagline: 'Alaala ng Arkitekto',
		minutes: '5 min',
		best: ['Kasaysayan ni Daniel Burnham', 'Litratong may kasaysayan'],
		category: 'nature',
		description:
			'Bust o rebulto ng ulo ni Daniel Hudson Burnham, ang Amerikanong arkitekto na nagplano ng lungsod ng Baguio, kasama ang isang plake ng pagkilala.',
		image: U('photo-1563387852576-9645e4c1dbf4'),
		imageAlt: 'Daniel Burnham bronze bust monument historic marker plaque — Burnham Park Baguio heritage Daniel Hudson Burnham',
	},
];

export const CLUSTER_CATEGORIES = [
	{ id: 'all', label: 'Lahat' },
	{ id: 'family', label: 'Pamilya at Bata' },
	{ id: 'nature', label: 'Kalikasan at Hardin' },
	{ id: 'sports', label: 'Palakasan at Aktibidad' },
] as const;

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
	image: string;
};

export const BITES: Bite[] = [
	{
		id: 'strawberry-taho',
		name: 'Strawberry Taho',
		price: 'Murang meryenda',
		where: 'Mga naglalako sa pasukan ng parke at gilid ng Lagoon',
		note:
			'Sariwang tofu na may strawberry syrup galing sa La Trinidad, Benguet. Higit sa lahat, ito ang lagda ng Baguio.',
		image: U('photo-1539113996712-2f67e9b1d1e4'),
	},
	{
		id: 'mais',
		name: 'Inihaw na Mais',
		price: 'Napakamura',
		where: 'Mga tindero sa paligid ng parke',
		note: 'Buong mais na inihaw sa uling, pinapahiran ng mantikilya.',
		image: U('photo-1551754756-6cab54358c72'),
	},
	{
		id: 'ube-halaya',
		name: 'Ube Halaya',
		price: 'Mababa \u2013 Katamtaman',
		where: 'Public Market ng Baguio at mga panaderya',
		note: 'Matamis at malinamnam na jam mula sa purple yam, kilalang produkto ng Baguio.',
		image: U('photo-1534939561126-855b8675edd7'),
	},
	{
		id: 'longganisa',
		name: 'Baguio Longganisa',
		price: 'Mababa \u2013 Katamtaman',
		where: 'Mga lokal na kainan at almusalan',
		note: 'Lokal na sausage na may bawang at tamis na timpla.',
		image: U('photo-1528821128474-27f963b062bf'),
	},
	{
		id: 'pinikpikan',
		name: 'Pinikpikan',
		price: 'Katamtaman',
		where: 'Mga restawran ng pagkaing Cordillera (hal. Farmer\u2019s Daughter)',
		note:
			'Tradisyunal na putahe ng manok ng mga taga-Cordillera. May kakaibang lasa mula sa usok at pampalasa.',
		image: U('photo-1496116218417-1a781b1c416c'),
	},
	{
		id: 'ensaladang-pako',
		name: 'Ensaladang Pako',
		price: 'Mababa \u2013 Katamtaman',
		where: 'Mga lokal na kainan',
		note: 'Ensalada ng mga ligaw na dahon ng pako, kamatis, at katas ng kalamansi.',
		image: U('photo-1512621776951-a57141f2eefd'),
	},
	{
		id: 'shake',
		name: 'Strawberry o Ube Shake',
		price: 'Mababa',
		where: 'Mga tindahan ng inumin sa parke',
		note: 'Lamig at sariwang gawa na shake mula sa mga lokal na prutas.',
		image: U('photo-1553530666-ba11a7da3888'),
	},
	{
		id: 'sundot-kulangot',
		name: 'Sundot Kulangot',
		price: 'Napakamura',
		where: 'Public Market at mga pasalubong shop',
		note: 'Maliit na kakanin na nakabalot sa kawayan. Kawili-wiling pangalan, matamis na meryenda.',
		image: U('photo-1558961363-fa8fdf82db35'),
	},
];

export type Restaurant = {
	id: string;
	name: string;
	distance: string;
	price: 'budget' | 'mid' | 'premium';
	signature: string[];
	why: string;
	image: string;
};

export const RESTAURANTS: Restaurant[] = [
	{
		id: 'cafe-ruins',
		name: 'Caf\u00e9 by the Ruins',
		distance: '500 m pa-kanluran',
		price: 'mid',
		signature: ['Baguio Bagnet', 'Camote Bread'],
		why: 'Isa sa pinakamatandang restawran sa Baguio. Rustik na kahoy na palamuti, may dating panitikan at sining.',
		image: U('photo-1517248135467-4c7edcad34c4'),
	},
	{
		id: 'good-taste',
		name: 'Good Taste Caf\u00e9',
		distance: '600 m malapit sa Session Rd',
		price: 'budget',
		signature: ['Buttered Chicken', 'Chop Suey'],
		why: 'Paborito ng mga lokal. Napakalaking serving at abot-kayang presyo. Bukas 24 oras.',
		image: U('photo-1552566626-52f8b828add9'),
	},
	{
		id: 'oh-my-gulay',
		name: 'Oh My Gulay',
		distance: '800 m sa Session Rd',
		price: 'mid',
		signature: ['Anak ng Putanesca', 'Kabute Fritters'],
		why: 'Lahat ay gulay at sining. Artist caf\u00e9 sa itaas ng La Azotea Building.',
		image: U('photo-1555396273-367ea4eb4db5'),
	},
	{
		id: 'hill-station',
		name: 'Hill Station',
		distance: '1.2 km sa Upper Session Rd',
		price: 'premium',
		signature: ['Home-made Meatloaf', 'Moroccan Spiced Stew'],
		why: 'Sa loob ng Casa Vallejo, ang pinakamatandang gusali ng Baguio. Award-winning na pagkain.',
		image: U('photo-1414235077428-338989a2e8c0'),
	},
	{
		id: 'farmers-daughter',
		name: 'Farmer\u2019s Daughter',
		distance: '3 km patungong Tam-awan Village',
		price: 'mid',
		signature: ['Pinikpikan', 'Pinuneg', 'Binungor'],
		why: 'Pinakamainam na tunay na pagkaing Cordillera. Rustik na kapaligiran, damang-dama ang kultura.',
		image: U('photo-1559339352-11d035aa65de'),
	},
	{
		id: 'arcas-yard',
		name: 'Arca\u2019s Yard',
		distance: '3 km sa Ambuklao Rd',
		price: 'mid',
		signature: ['Camote Pie', 'Arca\u2019s Cloud Tea'],
		why: 'Maliit na kubo sa bundok na may magandang tanawin. Perpekto para sa tahimik na meryenda.',
		image: U('photo-1515543904788-1e19ebba0fc4'),
	},
	{
		id: 'choco-batirol',
		name: 'Choco-late de Batirol',
		distance: '3 km sa Camp John Hay',
		price: 'mid',
		signature: ['Tsokolate eh', 'Bibingka'],
		why: 'Tradisyunal na mainit na tsokolate na gawa sa batirol, kasama ang mainit na bibingka.',
		image: U('photo-1509042239860-f550ce710b93'),
	},
	{
		id: '50s-diner',
		name: "50's Diner",
		distance: '1 km sa General Luna Rd',
		price: 'mid',
		signature: ['Giant Banana Split', 'American classics'],
		why: 'Retro diner sa istilong 1950s. Masarap ang milkshake at panghimagas ng mga kabataan.',
		image: U('photo-1580959375944-abd7e991f971'),
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
	image: string;
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
		image: U('photo-1455587734955-081b22074882'),
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
		image: U('photo-1611892440504-42a792e24d32'),
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
		image: U('photo-1631049552144-60967b0f800f'),
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
		image: U('photo-1578683010236-d716f9a3f461'),
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
		image: U('photo-1618773881591-bb5c1a8a8430'),
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
		image: U('photo-1566665797739-1674de7a421a'),
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
		image: U('photo-1582719478250-c89cae4dc85b'),
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
		image: U('photo-1582719508461-905c673771fd'),
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
		image: U('photo-1564501049412-61c2a3083791'),
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

export const PAGE_IMAGES = {
	indexPanoramic: U('photo-1515894203077-9cd360321c6a', 1200),
	panagbengaParade: U('photo-1464822759023-fed622ff2c3b'),
} as const;

export const PAGE_META: Record<
	string,
	{ title: string; description: string; eyebrow: string; hero: string; heroAlt: string }
> = {
	home: {
		title: 'Burnham Park Baguio — Opisyal na Gabay sa Bisita',
		description:
			'Ang 32.84-ektaryang luntiang parke sa gitna ng Baguio. Gabay sa swan boat lagoon, bike rental, 12 park zones, parking, Panagbenga festival, best time to visit, pagkain, at hotel malapit.',
		eyebrow: 'Burnham Park · Lungsod ng Baguio',
		hero: U('photo-1515894203077-9cd360321c6a'),
		heroAlt:
			'Burnham Park Baguio aerial wide panorama: man-made lagoon, swan paddle boats, pine forest, city skyline backdrop early morning golden hour — official visitor guide',
	},
	plano: {
		title: 'Plano ng Pagbisita sa Burnham Park · Ruta, Bayad sa Bangka at Bisikleta',
		description:
			'Itinerary Burnham Park: gaano katagal manatili, best walking route, bike lane, upa ng bangkang sisne at bisikleta presyo, at mga paalala bago bumisita.',
		eyebrow: 'Plano ng Pagbisita',
		hero: U('photo-1519681393784-d120267933ba'),
		heroAlt: 'Family riding bikes Burnham Park paved pine tree path sunlight dappled morning joyful Baguio recreation itinerary',
	},
	pagbiyahe: {
		title: 'Pagbiyahe at Paradahan · Paano Pumunta sa Burnham Park mula Manila',
		description:
			'Paano pumunta sa Burnham Park: jeepney route, taxi/Grab fare, bus from Manila (Victory Liner, Genesis), flight to Loakan Airport, at tunay na kalagayan ng paradahan sa paligid.',
		eyebrow: 'Pagbiyahe at Paradahan',
		hero: U('photo-1545569341-9eb8b30979d9'),
		heroAlt: 'Colorful Filipino jeepney Baguio City street pine trees Burnham Park entrance local public transport',
	},
	kasaysayan: {
		title: 'Kasaysayan ng Burnham Park · Daniel Burnham Plan, Ibaloi, at 12 na Sona',
		description:
			'Kasaysayan Burnham Park Baguio: Daniel Burnham plan 1905, lupain ng mga Ibaloi ng Kafagway, Proclamation 64, ang 12 cluster zones, at ~2600 na puno at halaman.',
		eyebrow: 'Kasaysayan at Pamana',
		hero: U('photo-1518998053901-5348d3961a04'),
		heroAlt: 'Vintage historic black and white Burnham Park Baguio early 1900s colonial American planner heritage pine trees',
	},
	oras: {
		title: 'Pinakamagandang Oras na Bumisita sa Burnham Park · Buwan, Araw, Pista',
		description:
			'Pinakamagandang buwan bumisita (Nobyembre–Pebrero cool dry), araw (Lunes–Biyernes less crowd), oras (6–10am sunrise), at Panagbenga Flower Festival tuwing Pebrero.',
		eyebrow: 'Pinakamagandang Oras',
		hero: U('photo-1473448912268-2022ce9509d8'),
		heroAlt: 'Burnham Park Baguio sunset golden hour Melvin Jones field pine tree silhouettes kites flying warm peaceful light',
	},
	pagkain: {
		title: 'Pagkain Malapit sa Burnham Park · Strawberry Taho, Pinikpikan, Restawran',
		description:
			'Saan makakain sa Burnham Park: authentic strawberry taho, inihaw na mais, ube halaya, pinikpikan, at best restaurants sa Session Road, Kisad, at Camp John Hay.',
		eyebrow: 'Pagkain at Meryenda',
		hero: U('photo-1539113996712-2f67e9b1d1e4'),
		heroAlt: 'Strawberry taho Filipino silken tofu snack fresh strawberry syrup Baguio City vendor authentic food closeup photography',
	},
	matutuluyan: {
		title: 'Matutuluyan Malapit sa Burnham Park · Hotel, Pension, Presyo 2026',
		description:
			'Saan matuloy malapit sa Burnham Park: 2-min walk hotels (Tuscany, Travelite), budget (456, Microtel), scenic heritage (Casa Vallejo, Azalea) — presyo, distansya, at angkop sa pamilya.',
		eyebrow: 'Matutuluyan',
		hero: U('photo-1520250497591-112f2f40a3f4'),
		heroAlt: 'Baguio hotel balcony view overlooking Burnham Park pine trees foggy morning mountains cozy wooden room',
	},
	faq: {
		title: 'FAQ Burnham Park · 15 Pinakamadalas Itanong (Bayad, Oras, Paradahan)',
		description:
			'FAQ Burnham Park Baguio: entrance fee? 24 hours open? wheelchair accessible? pet dog allowed? parking? drone? smoking? swan boat price? Panagbenga? — lahat ng totoong sagot.',
		eyebrow: 'Mga Madalas Itanong',
		hero: U('photo-1441974231531-c6227db76b6e'),
		heroAlt: 'Burnham Park wide peaceful pine avenue benches people sitting calm overcast Baguio highland scenic urban park',
	},
};
