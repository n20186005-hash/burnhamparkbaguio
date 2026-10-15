// ---- SITE ----------------------------------------------------------------------
export const SITE = {
	name: 'Burnham Park Baguio',
	projectName: 'Burnham Park Baguio Guide',
	author: 'Burnham Park Guide',
	siteUrl: 'https://burnhamparkbaguio.com',
	language: 'fil',
	locale: 'fil_PH',
	address: 'Jose Abad Santos Drive, Baguio, Benguet 2600',
	coordinates: { lat: 16.4129, lng: 120.5934 },
	mapsUrl: 'https://maps.app.goo.gl/ADvAac4CUWcDbzdDA',
	mapsShareUrl: 'https://maps.app.goo.gl/ADvAac4CUWcDbzdDA',
	plusCode: 'CH6V+X5 Baguio, Benguet, Philippines',
	mapsEmbed: 'https://www.google.com/maps?q=Burnham%20Park%20Baguio&output=embed',
	mapsReviewsUrl: 'https://maps.app.goo.gl/ADvAac4CUWcDbzdDA',
	jurisdiction: {
		attractionName: 'Burnham Park',
		cityHall: 'Baguio City Hall',
		tourismOffice: 'Baguio City Tourism Office',
		nationalTourismAgency: 'Philippine Department of Tourism (DOT)',
		region: 'Cordillera Administrative Region (CAR)',
		country: 'Republic of the Philippines',
	},
	officialSources: {
		fil: [
			'Baguio City Hall',
			'Baguio City Tourism Office',
			'Department of Tourism (DOT) ng Pilipinas',
		],
	},
	legalPage: {
		fil: {
			privacy: {
				title: 'Patakaran sa Privacy — Burnham Park Baguio',
				description:
					'Patakaran sa privacy ng Burnham Park Baguio Guide: anong datos ang aming kinokolekta, paano namin ito ginagamit, ang mga serbisyo ng ikatlong partido, at ang iyong mga karapatan sa ilalim ng GDPR at iba pang naaangkop na batas.',
				eyebrow: '🏛️ Patakaran ng Proyekto',
				heroAlt:
					'Tanawin ng Burnham Park para sa banner ng pahina ng Patakaran sa Privacy',
			},
			terms: {
				title: 'Mga Tuntunin ng Serbisyo — Burnham Park Baguio',
				description:
					'Mga tuntunin at legal na paunawa sa paggamit ng Burnham Park Baguio Guide: saklaw ng paggamit ng nilalaman, kawastuhan ng impormasyon, karapatan sa intelektwal na ari-arian, at limitasyon ng pananagutan.',
				eyebrow: '🏛️ Patakaran ng Proyekto',
				heroAlt:
					'Tanawin ng Burnham Park para sa banner ng pahina ng Mga Tuntunin ng Serbisyo',
			},
			cookie: {
				title: 'Mga Setting ng Cookie — Burnham Park Baguio',
				description:
					'Paggamit ng cookie sa Burnham Park Baguio Guide: kinakailangang cookie, cookie para sa pagsusuri, cookie para sa kagustuhan, at cookie para sa pagmemerkado — pati na ang mga paraan ng pamamahala at pahintulot.',
				eyebrow: '🏛️ Patakaran ng Proyekto',
				heroAlt:
					'Detalyeng tanawin ng Burnham Park para sa banner ng pahina ng Mga Setting ng Cookie',
			},
		},
	},
} as const;

// ---- ENTITY BINDING (single-attraction SEO) -------------------------------------
// Mga variable ng entity para sa iisang atraksyon — ginagamit sa JSON-LD, TDK, H1–H2,
// alt ng larawan at mga semantic na pangungusap sa katawan ng pahina.
export const ENTITY = {
	domainName: 'burnhamparkbaguio.com',
	attractionFullName: 'Burnham Park (Burnham Park Reservation)',
	attractionShortName: 'Burnham Park Baguio',
	attractionPlainName: 'Burnham Park',
	cityName: 'Baguio',
	stateProvince: 'Benguet',
	countryName: 'Philippines',
	countryNameLocal: 'Pilipinas',
	countryCode2Letter: 'PH',
	postalCode: '2600',
	latitude: 16.4129,
	longitude: 120.5934,
	plusCode: 'CH6V+X5 Baguio, Benguet, Philippines',
	streetAddress: 'Jose Abad Santos Dr',
	mapsShareUrl: 'https://maps.app.goo.gl/ADvAac4CUWcDbzdDA',
	mapsEmbedSrc: 'https://www.google.com/maps?q=Burnham%20Park%20Baguio&output=embed',
	nearbyLandmark1: 'Session Road',
	nearbyLandmark2: 'Baguio Cathedral',
	govtTourismUrl: 'https://www.tourism.gov.ph/',
	cityGovUrl: 'https://baguio.gov.ph/',
} as const;

// Hierarchy ng lokasyon: Atraksyon → Lungsod → Lalawigan → Bansa
export const ENTITY_HIERARCHY = [
	'Burnham Park',
	'Baguio',
	'Benguet',
	'Philippines',
] as const;

// ---- GOOGLE MAPS RATING & REVIEWS (hindi isinasama sa JSON-LD) ------------------
// Tandaan: ang rating at bilang ng review ay ipinapakita lamang sa pahina (HTML) at
// HINDI isinasama sa structured data, upang maiwasan ang peligro ng maling pag-angkin
// (misattribution) sa nilalamang pag-aari ng mga gumagamit ng Google Maps.
export const GOOGLE_REVIEWS = {
	source: 'Google Maps',
	sourceLabel: 'Google Maps',
	sourceLabelFil: 'Google Maps',
	rating: 4.5,
	ratingScale: 5,
	reviewCount: 32896,
	reviewCountFormatted: '32,896',
	category: 'City park',
	syncLabel: 'Oktubre 2026',
	syncLabelFil: 'Oktubre 2026',
	// Pangunahing linya ng pinagmulan (Filipino / English na teksto)
	creditLine:
		'Ang rating at bilang ng review ay naka-sync mula sa mga review ng gumagamit ng Google Maps · Oktubre 2026 · I-click para tingnan ang lahat ng review sa Google Maps↗',
	// Buong pahayag ng pinagmulan at copyright para sa bloke ng mga review
	sourceNote:
		'Synced from Google Maps user reviews, synced October 2026; copyright belongs to the original authors and Google Maps.',
	sourceNoteFil:
		'Naka-sync mula sa mga review ng gumagamit ng Google Maps, oras ng pag-sync: Oktubre 2026; ang copyright ay pag-aari ng orihinal na may-akda at ng Google Maps.',
	viewAllLabel: 'View all reviews on Google Maps',
	viewAllLabelFil: 'Tingnan ang lahat ng review sa Google Maps',
	introLabel: 'Reviews from Google Maps users',
	reviewsUrl: 'https://maps.app.goo.gl/ADvAac4CUWcDbzdDA',
} as const;

// Mga paulit-ulit na tema na lumilitaw sa mga review sa Google Maps (buod lamang,
// hindi direktang sipi ng partikular na review ng sinumang gumagamit).
export const GOOGLE_REVIEW_THEMES = [
	{
		icon: '📍',
		title: 'Lokasyon at Akses',
		desc: 'Napakadaling puntahan mula sa Session Road — nasa mismong sentro ng Baguio at maraming jeepney at taxi na dumadaan.',
	},
	{
		icon: '🛶',
		title: 'Lagoon at Pamamangka',
		desc: 'Ang pagbangka sa lawa at ang mga sisneng bangka ang pinakabibanggit na karanasan ng mga pamilya.',
	},
	{
		icon: '🌹',
		title: 'Rose Garden at mga Bulaklak',
		desc: 'Madalas purihin ang mga hagdan-hagdang hardin ng rosas — lalo na kapag Nobyembre hanggang Marso.',
	},
	{
		icon: '🌲',
		title: 'Luntiang Kapaligiran',
		desc: 'Ang sariwang hangin, mga punong pine, at tahimik na umaga ang dahilan kung bakit inirerekomenda ito para sa jogging at paglalakad.',
	},
	{
		icon: '🎟️',
		title: 'Libre at Pampamilya',
		desc: 'Palaging nababanggit na walang entrance fee kaya abot-kaya ito para sa pamilya at grupo.',
	},
	{
		icon: '🕐',
		title: 'Oras ng Pagbisita',
		desc: 'Maraming review ang nagpapaalala na mas tahimik ang parke bago mag-9:00 ng umaga.',
	},
] as const;

// ---- OFFICIAL / AUTHORITATIVE SOURCES -------------------------------------------
export const OFFICIAL_SOURCES = [
	{
		title: 'Google Maps user reviews',
		titleFil: 'Rating at mga review ng mga gumagamit ng Google Maps',
		url: 'https://maps.app.goo.gl/ADvAac4CUWcDbzdDA',
		sync: 'Oktubre 2026',
		syncFil: 'Oktubre 2026',
		desc: 'Rating na 4.5 / 5 mula sa 32,896 review ng mga gumagamit ng Google Maps para sa Burnham Park (City park).',
		sameSourceNote: true,
		external: true,
		kind: 'reviews',
	},
	{
		title: 'Philippine Department of Tourism (DOT)',
		titleFil: 'Kagawaran ng Turismo ng Pilipinas (DOT)',
		url: 'https://www.tourism.gov.ph/',
		sync: '',
		syncFil: '',
		desc: 'Opisyal na pambansang ahensya ng turismo — mga patakaran, anunsyo, at pangkalahatang impormasyon sa paglalakbay sa Pilipinas.',
		sameSourceNote: false,
		external: true,
		kind: 'government',
	},
	{
		title: 'Baguio City Government',
		titleFil: 'Pamahalaang Lungsod ng Baguio',
		url: 'https://baguio.gov.ph/',
		sync: '',
		syncFil: '',
		desc: 'Opisyal na pamahalaang lokal na namamahala sa Burnham Park sa pamamagitan ng CEPMO — mga ordinansa, abiso, at anunsyo ng lungsod.',
		sameSourceNote: false,
		external: true,
		kind: 'government',
	},
	{
		title: 'Wikipedia — Burnham Park (Baguio)',
		titleFil: 'Wikipedia — Burnham Park (Baguio)',
		url: 'https://en.wikipedia.org/wiki/Burnham_Park_(Baguio)',
		sync: '',
		syncFil: '',
		desc: 'Pampublikong sanggunian para sa kasaysayan ng Burnham Park Reservation at ng Burnham Plan ng 1905.',
		sameSourceNote: false,
		external: true,
		kind: 'reference',
	},
] as const;

// ---- NAVIGATION (single-page anchors) ------------------------------------------
export const NAV = [
	{ href: '#panahon', label: 'Panahon' },
	{ href: '#estratehiya', label: 'Estratehiya' },
	{ href: '#tungkol', label: 'Tungkol' },
	{ href: '#kasaysayan', label: 'Kasaysayan' },
	{ href: '#atraksyon', label: 'Mga Atraksyon' },
	{ href: '#gawain', label: 'Mga Gawain' },
	{ href: '#ruta', label: 'Mga Ruta' },
	{ href: '#praktikal', label: 'Praktikal na Impormasyon' },
	{ href: '#serbisyo', label: 'Mga Serbisyo' },
	{ href: '#transportasyon', label: 'Transportasyon' },
	{ href: '#kalapit', label: 'Mga Kalapit na Atraksyon' },
	{ href: '#galeriya', label: 'Galeriya' },
	{ href: '#mapa', label: 'Mapa' },
	{ href: '#agham', label: 'Agham at Responsibilidad' },
	{ href: '#tip', label: 'Mga Tip' },
	{ href: '#faq', label: 'FAQ' },
	{ href: '#mga-review', label: 'Rating' },
	{ href: '#mga-sanggunian', label: 'Sanggunian' },
] as const;

// ---- SUBPAGES (mga detalyadong gabay — English slug, tumutugma sa hinahanap ng bisita) ----
export const DETAIL_GUIDES = [
	{
		slug: 'history',
		icon: '📜',
		navLabel: 'Kasaysayan',
		enLabel: 'History & Who Designed It',
		blurb: 'Mula Kafagway hanggang Burnham Plan ng 1905 — kung sino ang nagdisenyo at bakit.',
	},
	{
		slug: 'opening-hours',
		icon: '🕒',
		navLabel: 'Oras at Bayad',
		enLabel: 'Opening Hours & Entrance Fee',
		blurb: 'Bukas 24 oras at LIBRE ang pasok — kung ano ang may bayad at kung kailan.',
	},
	{
		slug: 'how-to-get-there',
		icon: '🚌',
		navLabel: 'Paano Pumunta',
		enLabel: 'How to Get There & Parking',
		blurb: 'Jeepney, taxi, paradahan, at lakarin mula SM Baguio at Session Road.',
	},
	{
		slug: 'park-map-and-attractions',
		icon: '🗺️',
		navLabel: 'Mapa at Atraksyon',
		enLabel: 'Park Map & 12 Attractions',
		blurb: 'Mapa ng parke at ang 12 cluster — kasama ang oras ng paglalakad sa bawat isa.',
	},
	{
		slug: 'food-and-restaurants',
		icon: '🍓',
		navLabel: 'Pagkain',
		enLabel: 'Food & Restaurants Nearby',
		blurb: 'Strawberry taho, lutuing Cordilleran, at kainan sa abot ng 10 minutong lakad.',
	},
	{
		slug: 'where-to-stay',
		icon: '🏨',
		navLabel: 'Matutuluyan',
		enLabel: 'Where to Stay',
		blurb: 'Mga lugar na malapit sa parke — mula walking distance hanggang may tanawin.',
	},
	{
		slug: 'faq',
		icon: '❓',
		navLabel: 'FAQ',
		enLabel: 'Frequently Asked Questions',
		blurb: 'Mga madalas itanong: bayad, oras, kaligtasan, Panagbenga, at accessibility.',
	},
] as const;

// ---- KEY INFO ------------------------------------------------------------------
export const KEY_INFO = [
	{ icon: 'ticket', label: 'Bayad sa Pagpasok', value: 'LIBRE', sub: 'Walang entrance fee' },
	{ icon: 'clock', label: 'Oras ng Operasyon', value: '24 Oras', sub: 'Bukas araw-araw' },
	{ icon: 'stopwatch', label: 'Inirerekomendang Oras', value: '3–4 Oras', sub: 'Para sa regular na pagbisita' },
	{ icon: 'heart', label: 'Pinakamagandang Oras', value: '6–10 AM', sub: 'Tahimik at sariwang hangin' },
] as const;

// ---- 12 CLUSTERS (Mga Atraksyon) ------------------------------------------------
export interface Cluster {
	id: string;
	title: string;
	tagline: string;
	minutes: string;
	description: string;
	best: string[];
	category: string;
}

export const CLUSTERS: Cluster[] = [
	{
		id: 'lagoon',
		title: 'Burnham Lagoon',
		tagline: 'Bangka at Tanawin',
		minutes: '30–60 min',
		description:
			'Ang puso ng Burnham Park — isang malawak na lawa kung saan maaaring sumakay ng bangkang sisne, pedal boat, o sagwan. Napapalibutan ito ng mga punong pine at walking path na may mga bangko para sa pahinga.',
		best: ['Pamilya', 'Magkapareha', 'Litratista'],
		category: 'water',
	},
	{
		id: 'rose-garden',
		title: 'Rose Garden',
		tagline: 'Mga Rosas at Bulaklak',
		minutes: '20–40 min',
		description:
			'Hagdan-hagdang hardin ng daan-daang hybrid na rosas na namumukadkad dahil sa malamig na klima ng Baguio (~1,500m altitude). Pinakamaganda mula Nobyembre hanggang Marso — perpekto para sa litrato at pre-nuptial shoots.',
		best: ['Magkapareha', 'Litratista', 'Pamilya'],
		category: 'nature',
	},
	{
		id: 'melvin-jones',
		title: 'Melvin Jones Grandstand',
		tagline: 'Parang at Panagbenga',
		minutes: '20–60 min',
		description:
			'Malawak na damuhan na napapalibutan ng pine trees — ito ang pangunahing venue ng Panagbenga (Baguio Flower Festival) at iba pang malalaking kaganapan ng lungsod. Mainam magpalipad ng saranggola o magpahinga sa ilalim ng araw.',
		best: ['Pamilya', 'Mahilig sa Pista', 'Jogger'],
		category: 'events',
	},
	{
		id: 'childrens-playground',
		title: "Children's Playground",
		tagline: 'Palaruan at Pony Ride',
		minutes: '30–60 min',
		description:
			'Ang lugar para sa mga bata — may mga duyan, slide, seesaw, at maikling pony ride para sa mga batang 2–10 taong gulang. May mga bangko para sa mga magulang at tagapag-alaga.',
		best: ['Pamilya', 'May Kasamang Bata'],
		category: 'play',
	},
	{
		id: 'skating-rink',
		title: 'Skating Rink',
		tagline: 'Roller Skate',
		minutes: '30–60 min',
		description:
			'Sementadong palaruan para sa roller skating — masikip tuwing hapon ng katapusan ngunit masayang aktibidad para sa lahat ng edad. May upa ng skate sa mismong lugar.',
		best: ['Kabataan', 'Magkakaibigan'],
		category: 'play',
	},
	{
		id: 'igorot-garden',
		title: 'Igorot Garden',
		tagline: 'Kultura at Pamana',
		minutes: '15–30 min',
		description:
			'Pagkilala sa mga katutubong Igorot — may estatwa ng mandirigmang Igorot at tradisyunal na bahay na bato. Isang lugar para gunitain ang kultura ng Cordillera at ang mga Ibaloi na dating nanirahan sa Kafagway.',
		best: ['Mahilig sa Kasaysayan', 'Litratista', 'Mag-aaral'],
		category: 'culture',
	},
	{
		id: 'orchidarium',
		title: 'Orchidarium',
		tagline: 'Orkidya at Lilim',
		minutes: '15–30 min',
		description:
			'May bubong na hardin ng mga katutubong orkidya mula sa bundok ng Cordillera — Dendrobium, Vanda, at iba pang uri. Sariwa at malamig ang hangin, perpekto para sa maikling pahinga.',
		best: ['Mahilig sa Halaman', 'Litratista', 'Magkapareha'],
		category: 'nature',
	},
	{
		id: 'pine-grove',
		title: 'Pine Grove',
		tagline: 'Puno ng Pino',
		minutes: '15–30 min',
		description:
			'Isang kumpol ng matatayog na Benguet Pine (Pinus kesiya) — ang pinakakilalang puno ng Cordillera. Nagbibigay ng sariwang hangin at katangiang amoy na tanging sa Baguio mo lamang mararanasan.',
		best: ['Nature Lover', 'Jogger', 'Magkapareha'],
		category: 'nature',
	},
	{
		id: 'athletic-bowl',
		title: 'Athletic Bowl',
		tagline: 'Jogging at Isports',
		minutes: '30–90 min',
		description:
			'400-meter na oval track, basketball court, football field, at archery range. Dinadagsa ng mga lokal tuwing 5–7 ng umaga para sa kanilang pang-araw-araw na ehersisyo.',
		best: ['Jogger', 'Atleta', 'Magkakaibigan'],
		category: 'play',
	},
	{
		id: 'picnic-grove',
		title: 'Picnic Grove',
		tagline: 'Piknik sa Ilalim ng Puno',
		minutes: '30–90 min',
		description:
			'Malawak na lugar sa ilalim ng mga punong akasya at eucalyptus — may mga mesa at bangko para sa piknik ng pamilya o grupo. Sariwa ang hangin at napapalibutan ng kalikasan.',
		best: ['Pamilya', 'Grupo', 'Magkakaibigan'],
		category: 'nature',
	},
	{
		id: 'bike-lane',
		title: 'Bike Lane',
		tagline: 'Pagbibisikleta',
		minutes: '30–60 min',
		description:
			'Sariling bike lane ng parke kung saan maaaring umarkila ng bisikleta — single, double, o pampamilya (sidecar). Masayang paraan para libutin ang buong parke nang hindi naglalakad.',
		best: ['Pamilya', 'Magkakaibigan', 'Magkapareha'],
		category: 'play',
	},
	{
		id: 'sunken-garden',
		title: 'Sunken Garden',
		tagline: 'Hardin at Halaman',
		minutes: '15–30 min',
		description:
			'Isang depresadong lugar ng hardin na may iba-ibang uri ng halaman at bulaklak — isa sa mga pinakatahimik na bahagi ng parke. Mainam para sa tahimik na pagbabasa o pagmumuni-muni.',
		best: ['Mag-isa', 'Nagbabasa', 'Litratista'],
		category: 'nature',
	},
] as const;

export const CLUSTER_CATEGORIES = [
	{ id: 'all', label: 'Lahat' },
	{ id: 'water', label: '🛶 Tubig' },
	{ id: 'nature', label: '🌲 Kalikasan' },
	{ id: 'play', label: '⚽ Palaro' },
	{ id: 'culture', label: '🏛️ Kultura' },
	{ id: 'events', label: '🎉 Kaganapan' },
] as const;

// ---- HISTORY TIMELINE -----------------------------------------------------------
export const HISTORY_TIMELINE = [
	{
		year: 'Unang bahagi ng 1900s',
		title: 'Bago ang Burnham Plan',
		desc: 'Ang lugar na ito ay dating parang at pastulan ng mga Ibaloi — tinatawag nilang <em>Kafagway</em>, ang sentro ng kanilang pamayanan bago dumating ang mga Amerikano. Dito rin dating nagtitipon ang mga taga-Baguio para sa mga lokal na okasyon.',
	},
	{
		year: '1904',
		title: 'Paanyaya kay Daniel Burnham',
		desc: 'Sa pamamagitan ni Gobernador William Howard Taft at ng Philippine Commission, inimbitahan ang tanyag na Amerikanong arkitekto na si <strong>Daniel Hudson Burnham</strong> (may-akda ng "City Beautiful Movement") upang gumawa ng plano para sa Maynila at Baguio.',
	},
	{
		year: '1905',
		title: 'Burnham Plan ng Baguio',
		desc: 'Iniharap ni Burnham ang kanyang pangkalahatang plano: itatag ang Burnham Park bilang "green heart" o luntiang sentro ng lungsod, na napapalibutan ng mga kalsada, gusali ng gobyerno, at residential zone.',
	},
	{
		year: '1907',
		title: 'Sinimulang Itayo',
		desc: 'Sa ilalim ni William E. Parsons (ang itinalagang arkitekto ng gobyerno para sa Pilipinas), sinimulang itayo ang parke: ang lagoon, mga daanan, at ang unang mga puno.',
	},
	{
		year: '1909',
		title: 'Chartered na Lungsod ng Baguio',
		desc: 'Kinilala ng Philippine Commission ang Baguio bilang chartered city — isang "hill station" para sa administrasyong kolonyal. Naging sentro ng pamamahala ang paligid ng Burnham Park: mga opisina ng gobyerno, paaralan, at pampublikong espasyo na nakapalibot sa parke.',
	},
	{
		year: '1925',
		title: 'Proklamasyon Blg. 64',
		desc: 'Opisyal na itinalaga ni Gobernador Leonard Wood ang parke bilang <strong>Burnham Park Reservation</strong> — 32.84 ektarya ng lupa na hindi na maaaring ibenta o hatiin.',
	},
	{
		year: 'Ikalawang Digmaang Pandaigdig (1940s)',
		title: 'Pagkasira at Pagpapanumbalik',
		desc: 'Ang parke ay dumanas ng malaking pinsala noong digmaan. Pagkatapos ng digmaan, muling itinayo at muling itinanim ang mga puno nito.',
	},
	{
		year: '16 Hulyo 1990',
		title: 'Lindol sa Luzon at ang Parke bilang Kanlungan',
		desc: 'Yumanig ang malakas na lindol sa Luzon at malubhang naapektuhan ang Lungsod ng Baguio. Maraming pamilya ang pansamantalang nanirahan sa mga bukas na espasyo tulad ng Burnham Park — patunay na ang parke ay hindi lamang pasyalan, kundi espasyo ring pang-emerhensiya ng lungsod.',
	},
	{
		year: 'Mula 1995 hanggang Ngayon',
		title: 'Pamamahala ng Lungsod ng Baguio',
		desc: 'Inilipat ang pang-araw-araw na pangangalaga sa <strong>City Environment and Parks Management Office (CEPMO)</strong> ng Lungsod ng Baguio. Noong 2018, muling inayos ang 12 na cluster o sona ng parke.',
	},
] as const;

// Kontekstong pangkasaysayan — nagbibigay ng mas malalim na kuwento bago ang timeline.
export const HISTORY_CONTEXT = [
	{
		icon: '📜',
		title: 'Mula Kafagway patungong Burnham',
		desc: 'Ang kwento ng Burnham Park ay kwento ng tatlong identidad: ang <em>Kafagway</em> ng mga Ibaloi, ang <em>Burnham Reservation</em> ng mga Amerikanong tagaplano, at ang <em>luntiang puso</em> ng Lungsod ng Baguio ngayon. Ang bawat panahon ay nag-iwan ng hugis sa parke — mula sa pastulan at tagpuan ng komunidad, naging sentro ito ng kolonyal na "hill station", hanggang sa maging pampublikong parke na ginagamit ng libo-libong bisita araw-araw.',
	},
	{
		icon: '🏗️',
		title: 'Bakit naging "luntiang sentro" ang disenyo',
		desc: 'Sa <em>City Beautiful</em> na pananaw ni Daniel Hudson Burnham, hindi palamuti lamang ang parke — imprastruktura ito. Ang planong itinayo noong unang dekada ng 1900s ay naglalagay ng parke sa gitna: mga gusali ng pamahalaan at komersyal na paligid ay nakapalibot dito. Nananatiling kapansin-pansin ang layout na ito hanggang ngayon — mula Burnham Park, maabot ang Session Road, Katedral ng Baguio, at ang mga pamilihang pampubliko sa loob lamang ng ilang minutong lakad.',
	},
	{
		icon: '🌫️',
		title: 'Klima, punong pine, at ang bagong misyon ng parke',
		desc: 'Dahil nasa 1,500 metro ang elebasyon at napapalibutan ng Benguet pine, naging atraksyon din ang mismong klima: hamog sa umaga, malamig na hangin sa gabi, at ulap na dumadaloy sa ibabaw ng lawa. Ngayon, ang pangangalaga sa mga punong ito ay bahagi ng responsibilidad ng lungsod — pati na rin ang pagkilala sa parke bilang pamana ng mga katutubong komunidad ng Cordillera.',
	},
] as const;

// ---- LEGENDS & HERITAGE ---------------------------------------------------------
export const LEGENDS = [
	{
		icon: '🏔️',
		title: 'Ang mga Ibaloi at Kafagway',
		desc: 'Bago pa ang anumang plano ng mga Amerikano, ang lugar na tinatawag ngayong Burnham Park ay bahagi ng malawak na pastulan ng mga <strong>Ibaloi</strong> — isa sa mga katutubong pangkat ng Cordillera. Ang <em>Kafagway</em> (na ang ibig sabihin ay "malawak na parang") ang naging tahanan at kabuhayan nila sa loob ng maraming henerasyon. Ang pagkilala sa kasaysayang ito ay mahalaga: ang Burnham Park natin ngayon ay hindi lamang likas na tanawin — ito ay bahagi ng pamana ng mga katutubo ng Cordillera.',
	},
	{
		icon: '🏛️',
		title: 'City Beautiful Movement',
		desc: 'Si <strong>Daniel Hudson Burnham</strong> (1846–1912) ay isa sa pinakamakapangyarihang tagaplano ng lungsod sa Amerika. Kilala siya sa <em>City Beautiful Movement</em> — isang pilosopiya na ang luntiang parke, malalapad na daanan, at marangyang pampublikong espasyo ay nakakapagpabuti ng kalusugan at pagkatao ng mga mamamayan. Ang kanyang plano para sa Baguio ay isa sa mga pangunahing halimbawa ng pananaw na ito sa labas ng Amerika.',
	},
	{
		icon: '🌿',
		title: 'Bakit "Baguio"? — ang kwento ng salitang bagiw',
		desc: 'Ayon sa karaniwang etimolohiyang lokal, ang pangalang <strong>Baguio</strong> ay nagmula sa salitang Ibaloi na <em>bagiw</em> — ibig sabihin ay <em>hamog-lumot</em> o moss na sagana sa mga puno at bato ng lugar. Bagaman walang iisang opisyal na bersyon ng kwento, ang ugnayan ng pangalan sa mamasa-masa at malamig na kapaligiran ay nagpapakita kung gaano kalapit ang wika ng mga katutubo sa likas na kapaligiran ng Cordillera.',
	},
	{
		icon: '🌲',
		title: 'Ang Baga ng Baguio',
		desc: 'Ang Burnham Park ang nagsisilbing <strong>"lungsod na baga"</strong> ng Baguio — sumisipsip ng polusyon at nagpapanatili ng malamig na temperatura sa sentro ng lungsod. May humigit-kumulang <strong>2,600 na puno</strong> sa loob ng parke na kabilang sa <em>72 iba\'t ibang uri</em> — mula Benguet Pine hanggang akasya at eucalyptus. Ito ang dahilan kung bakit kahit nasa gitna ka ng lungsod, sariwa pa rin ang hanging nalalanghap.',
	},
] as const;

// ---- ACTIVITIES (mga gawain, walang komersyal na presyo) -------------------------
export const ACTIVITIES = [
	{
		icon: '🛶',
		title: 'Pamamangka sa Lagoon',
		type: 'Sisne / Pedal Boat / Sagwan',
		details: [
			'Hanggang 2–4 na tao kada bangka',
			'Pinakamaganda 6–9 ng umaga o 4–5 ng hapon',
			'May takip na bubong at life vest — ligtas para sa mga bata',
			'Iwasan ang peak hours para hindi mahabang pumila',
		],
	},
	{
		icon: '🚴',
		title: 'Pagbibisikleta',
		type: 'Single / Double / Pampamilya (Sidecar)',
		details: [
			'May sariling bike lane ang parke',
			'May upuan ng bata o double bike para sa magkapareha',
			'Pampamilyang bisikleta na may sidecar para sa 4–6 na tao',
			'Magandang paraan para libutin ang buong parke',
		],
	},
	{
		icon: '🛼',
		title: 'Roller Skating',
		type: 'Skating Rink',
		details: [
			'Sementadong palaruan sa loob ng parke',
			'May upa ng skate sa mismong lugar',
			'Mas masikip tuwing hapon ng katapusan',
			'Mas mainam kung may kasamang marunong',
		],
	},
	{
		icon: '🐎',
		title: 'Pony Ride',
		type: 'Para sa mga Bata (2–10 taong gulang)',
		details: [
			'Maikling ikot sa paligid ng playground',
			'May gabay na naghahawak ng tali — ligtas para sa maliliit',
			'Isang masayang karanasan para sa mga batang unang beses sasakay sa kabayo',
		],
	},
	{
		icon: '🏃',
		title: 'Jogging at Pag-eehersisyo',
		type: 'Athletic Bowl Oval (400m track)',
		details: [
			'Dumadagsa ang mga lokal tuwing 5–7 ng umaga',
			'May basketball court, football field, at archery range',
			'Bukas para sa lahat — walang membership na kailangan',
		],
	},
	{
		icon: '📷',
		title: 'Pagkuha ng Larawan',
		type: 'Pinakamagandang Lugar para sa Litrato',
		details: [
			'Lagoon pier tuwing sunrise — salamin ang lawa',
			'Rose Garden Nobyembre–Marso — puno ng bulaklak',
			'Igorot Garden stone huts — kakaibang background',
			'Melvin Jones pine tree silhouettes sa sunset',
		],
	},
] as const;

// ---- FOOD TYPES (uri ng pagkain, walang tiyak na pangalan ng kainan) ------------
export const FOOD_TYPES = [
	{
		icon: '🍓',
		title: 'Strawberry Taho',
		desc: 'Ang Baguio version ng tradisyonal na taho — mainit na tokwa na may strawberry syrup sa halip na arnibal. Makikita sa mga naglalako sa paligid ng parke, lalo na sa umaga.',
	},
	{
		icon: '🍢',
		title: 'Street Food at Ihaw-Ihaw',
		desc: 'Fishball, kikiam, kwek-kwek, at inihaw na mais — mga klasikong meryendang Pilipino na makikita sa mga nagtitinda sa gilid ng Session Road at malapit sa parke.',
	},
	{
		icon: '🥤',
		title: 'Sariwang Fruit Shakes',
		desc: 'Strawberry shake, mango shake, at iba pang sariwang prutas mula sa Cordillera. Perpektong pampalamig pagkatapos maglakad sa parke.',
	},
	{
		icon: '🍲',
		title: 'Lokal na Lutuing Cordilleran',
		desc: 'Tunay na pagkain ng Cordillera — pinikpikan (manok na may sabaw), pinuneg (blood sausage), inandila (sticky rice cake), at iba pang katutubong lutuin. Makikita sa mga kainan sa paligid ng Session Road at Baguio Public Market.',
	},
	{
		icon: '🥐',
		title: 'Panaderya at Kapehan',
		desc: 'Ang Baguio ay kilala sa sariwang tinapay at mainit na kape — perpekto para sa malamig na panahon. Maraming lokal na panaderya at kapehan sa kahabaan ng Session Road.',
	},
	{
		icon: '🛍️',
		title: 'Pasalubong at Baguio Products',
		desc: 'Strawberry jam, ube halaya, peanut brittle, sundot kulangot, at iba pang produkto ng Cordillera. Pinakamagandang bumili sa Baguio Public Market (~800 m mula sa parke).',
	},
] as const;

// ---- ACCOMMODATION TYPES (uri ng matutuluyan, walang tiyak na pangalan) ----------
export const ACCOMMODATION_TYPES = [
	{
		icon: '🚶',
		title: 'Walking Distance (1–5 minuto)',
		areas: 'Jose Abad Santos Drive, Harrison Road',
		desc: 'Mga hotel at inn na ilang hakbang lamang mula sa pangunahing pasukan ng Burnham Park. Pinakamaginhawa para sa mga nais ng mabilis na akses sa parke — perpekto para sa pamilya, nakatatanda, at unang beses na bisita.',
		pros: ['Pinakamalapit sa parke', 'Maraming kainan at jeepney stop', 'Madaling mahanap'],
		cons: ['Mas mahal kaysa sa malayo', 'Maaaring maingay tuwing katapusan'],
	},
	{
		icon: '🏙️',
		title: 'Session Road Area (10–15 minutong lakad)',
		areas: 'Session Road, Upper at Lower',
		desc: 'Ang pangunahing kalsada ng Baguio — puno ng kainan, kapehan, at tindahan. Maraming opsyon mula sa budget inn hanggang sa mas magandang hotel. 10–15 minutong lakad paibaba patungong Burnham Park.',
		pros: ['Sentro ng pagkain at pamimili', 'Maraming opsyon sa presyo', 'Masiglang paligid'],
		cons: ['Paakyat na daan pabalik', 'Mas maraming tao'],
	},
	{
		icon: '💚',
		title: 'Budget-Friendly Options',
		areas: 'Magsaysay Avenue, Abanao Street, paligid ng Public Market',
		desc: 'Mga pension house, transient, at backpacker hostel — perpekto para sa mga nagtitipid. 10–20 minutong lakad mula sa parke. Maraming kainan sa paligid na abot-kaya ang presyo.',
		pros: ['Pinakamurang opsyon', 'Tunay na karanasang lokal', 'Malapit sa Public Market'],
		cons: ['Mas simpleng pasilidad', 'Mas malayo sa parke'],
	},
	{
		icon: '🌄',
		title: 'May Magandang Tanawin',
		areas: 'Mines View area, Outlook Drive, Leonard Wood',
		desc: 'Mga hotel at lodge na may tanawin ng bundok at ng buong lungsod. Mas tahimik at malamig ang paligid, ngunit kailangan ng sasakyan o taxi para pumunta sa parke (10–20 minuto).',
		pros: ['Magandang tanawin', 'Tahimik at malamig', 'Mas maluwag na espasyo'],
		cons: ['Kailangan ng sasakyan', 'Mas malayo sa sentro'],
	},
] as const;

// ---- NEARBY ATTRACTIONS (mga kalapit na atraksyon) ------------------------------
export const NEARBY_ATTRACTIONS = [
	{
		title: 'Session Road',
		type: 'Shopping at Kainan',
		dist: 'Katabi lamang ng parke',
		desc: 'Ang pangunahing kalsada ng Baguio — ang sentro ng komersyo, kainan, at kultura ng lungsod. Mahigit isang siglo nang buhay na bahagi ng pang-araw-araw na buhay sa Baguio.',
	},
	{
		title: 'Baguio Public Market',
		type: 'Pamilihan',
		dist: '~800 m / 10 min lakad',
		desc: 'Ang pinakamagandang lugar para bumili ng sariwang prutas, gulay, at pasalubong mula sa Cordillera. Mura at masagana — isang karanasang hindi dapat palampasin.',
	},
	{
		title: 'Baguio Cathedral',
		type: 'Simbahan at Landmark',
		dist: '~700 m / 10 min lakad',
		desc: 'Ang Our Lady of the Atonement Cathedral — isang magandang neo-Gothic na simbahan sa ibabaw ng burol na may tanawin ng lungsod. Itinatag noong 1936.',
	},
	{
		title: 'SM City Baguio',
		type: 'Mall at Tanawin',
		dist: '~500 m / 7 min lakad',
		desc: 'Modernong mall na may viewing deck na nag-aalok ng malawak na tanawin ng Baguio. May kainan, grocery, at pasilidad para sa mga bisita.',
	},
	{
		title: 'Mines View Park',
		type: 'Tanawin at Pasalubong',
		dist: '~3 km / 15–20 min by taxi',
		desc: 'Isang observation deck na may malawak na tanawin ng lumang minahan ng ginto at bundok ng Cordillera. Sikat para sa pagsusuot ng tradisyunal na kasuotan ng Igorot.',
	},
	{
		title: 'The Mansion',
		type: 'Kasaysayan',
		dist: '~3.5 km / 15–20 min by taxi',
		desc: 'Ang opisyal na summer residence ng Pangulo ng Pilipinas — isang eleganteng gusali na may magandang hardin na bukas para sa litrato (hindi pinapayagan pumasok sa loob).',
	},
] as const;

// ---- PRACTICAL INFO (mga pasilidad at serbisyo) ----------------------------------
export const PRACTICAL_INFO = [
	{
		icon: '🚻',
		title: 'Palikuran (Restrooms)',
		desc: 'May mga pampublikong palikuran sa paligid ng lagoon at malapit sa mga pangunahing pasukan. May maliit na bayad para sa paggamit — magdala ng barya.',
	},
	{
		icon: '🅿️',
		title: 'Paradahan (Parking)',
		desc: 'Limitadong paradahan sa gilid ng Jose Abad Santos Drive at Harrison Road. Pinakamainam pumunta nang maaga o gumamit ng pampublikong transportasyon, lalo na tuwing katapusan at pista.',
	},
	{
		icon: '♿',
		title: 'Aksesibilidad (Accessibility)',
		desc: 'May mga ramp at sementadong daanan ang mga pangunahing bahagi ng parke. Gayunpaman, may ilang lugar na hindi fully accessible — magplano nang maaga kung may kasamang nakatatanda o may kapansanan.',
	},
	{
		icon: '🛒',
		title: 'Pagkain at Meryenda',
		desc: 'Maraming nagtitinda ng meryenda, inumin, at ice cream sa loob at paligid ng parke. May mga karinderya at kainan sa Session Road (~5 minutong lakad) para sa mas masustansyang pagkain.',
	},
	{
		icon: '🏨',
		title: 'Matutuluyan (Accommodation)',
		desc: 'Maraming opsyon sa paligid ng parke — hotel, inn, pension house, at transient. Mula walking distance (1–5 min) hanggang 15–20 minutong taxi ride.',
	},
	{
		icon: '🗑️',
		title: 'Kalinisan at Basura',
		desc: 'May mga basurahan sa iba\'t ibang bahagi ng parke. Hinihikayat ang lahat na magdala ng sariling eco bag at panatilihin ang kalinisan — huwag mag-iwan ng basura kung saan-saan.',
	},
	{
		icon: '🛡️',
		title: 'Seguridad at Kaligtasan',
		desc: 'May nagpapatrolyang mga security guard sa parke, lalo na tuwing gabi. Ang parke ay ligtas para sa mga pamilya at turista, ngunit magingat pa rin sa mga personal na gamit.',
	},
] as const;

// ---- TIPS -----------------------------------------------------------------------
export const TIPS = [
	{
		icon: '🧥',
		title: 'Magdala ng Jacket',
		desc: 'Bumababa ang temperatura ng 10–15°C sa Baguio — laging may dalang sweater o jacket, lalo na sa umaga at gabi.',
	},
	{
		icon: '☔',
		title: 'Handa sa Ulan (Hunyo–Oktubre)',
		desc: 'Ang tag-ulan sa Baguio ay mula Hunyo hanggang Oktubre. Laging magdala ng payong o kapote — pabugso-bugso ang ulan at maaaring biglaan.',
	},
	{
		icon: '👟',
		title: 'Komportableng Sapatos',
		desc: 'Sementado ang mga daanan ngunit marami kang lalakarin. Magsuot ng komportableng walking shoes o rubber shoes.',
	},
	{
		icon: '💵',
		title: 'Magdala ng Cash (Barya)',
		desc: 'Karamihan sa mga nagtitinda sa loob ng parke ay tumatanggap lamang ng cash. Magdala ng maliliit na pera para sa meryenda, upa ng bangka, at palikuran.',
	},
	{
		icon: '🌅',
		title: 'Pumunta nang Maaga (6–9 AM)',
		desc: 'Ang pinakamagandang oras para sa tahimik na karanasan — kakaunti ang tao, sariwa ang hangin, at maganda ang liwanag para sa litrato.',
	},
	{
		icon: '🚌',
		title: 'Gumamit ng Pampublikong Transportasyon',
		desc: 'Mahirap ang paradahan malapit sa parke. Gumamit ng taxi, jeepney, o maglakad mula sa iyong hotel kung maaari. Ang mga lokal na jeepney ay ₱13 lamang.',
	},
	{
		icon: '🌿',
		title: 'Igalang ang Kalikasan at Kultura',
		desc: 'Huwag pumitas ng bulaklak, huwag umakyat sa puno, at igalang ang mga monumento at estatwa sa Igorot Garden. Ang Burnham Park ay isang pampublikong kayamanan — alagaan ito para sa susunod na henerasyon.',
	},
] as const;

// ---- FAQS -----------------------------------------------------------------------
export const FAQS = [
	{
		q: 'May bayad ba ang pagpasok sa Burnham Park?',
		a: 'Wala. Libre ang pagpasok sa lahat ng bahagi ng Burnham Park — walang entrance fee. Ang ilang aktibidad tulad ng pamamangka at pagbibisikleta ay may kaukulang bayad, ngunit ang mismong parke ay libre para sa lahat.',
	},
	{
		q: 'Ano ang pinakamagandang oras para bumisita?',
		a: 'Ang pinakamagandang oras ay 6:00–9:00 ng umaga — kakaunti ang tao, malamig ang panahon, at maganda ang liwanag para sa litrato. Ang 4:00–6:00 ng hapon ay maganda rin para sa sunset sa Melvin Jones Grandstand.',
	},
	{
		q: 'Ligtas ba ang Burnham Park?',
		a: 'Oo, ligtas ang Burnham Park. May mga nagpapatrolyang security guard, lalo na tuwing gabi. Maraming tao sa parke na nagbibigay ng karagdagang seguridad. Magingat pa rin sa mga personal na gamit tulad ng sa anumang pampublikong lugar.',
	},
	{
		q: 'Kelan ang Panagbenga Festival?',
		a: 'Ang Panagbenga (Baguio Flower Festival) ay ginaganap tuwing Pebrero, na ang pinakamalaking parada ay karaniwang nasa huling katapusan ng buwan. Ang Melvin Jones Grandstand sa loob ng Burnham Park ang pangunahing venue. Asahan ang napakaraming tao — magpareserba ng matutuluyan nang maaga.',
	},
	{
		q: 'Ilang oras ang kailangan para malibot ang buong parke?',
		a: 'Para sa regular na pagbisita, 3–4 na oras. Para sa mabilisang pagbisita (Lagoon loop + Rose Garden), 1.5–2 oras. Para sa buong araw na karanasan (lahat ng aktibidad), 6–8 oras.',
	},
	{
		q: 'Puwede bang magdala ng pagkain at mag-piknik?',
		a: 'Oo, hinihikayat ang piknik sa Picnic Grove at iba pang mga damuhan. Basta huwag mag-iwan ng basura — magdala ng sariling eco bag at itapon ang basura sa tamang lalagyan.',
	},
	{
		q: 'May parking ba sa Burnham Park?',
		a: 'Limitado ang paradahan — may mga puwesto sa gilid ng Jose Abad Santos Drive at Harrison Road, ngunit mabilis mapuno lalo na tuwing katapusan. Mas mainam gumamit ng pampublikong transportasyon o maglakad mula sa malapit na hotel.',
	},
	{
		q: 'Puwede bang pumasok nang gabí?',
		a: 'Ang parke ay bukas 24 oras, ngunit mas kakaunti ang ilaw at tao pagkalipas ng 8:00 ng gabi. Ang ilang bahagi (tulad ng Orchidarium) ay may sariling oras. Ang lagoon area at mga pangunahing daanan ay nananatiling bukas.',
	},
	{
		q: 'Ano ang makikita sa paligid ng parke?',
		a: 'Katabi ng Burnham Park ang Session Road (kainan at shopping), Baguio Public Market (pasalubong), Our Lady of the Atonement Cathedral, at SM City Baguio. Lahat ay 5–15 minutong lakad lamang mula sa parke.',
	},
	{
		q: 'May dress code ba o restrictions?',
		a: 'Walang pormal na dress code, ngunit inirerekomenda ang disenteng pananamit dahil ito ay pampublikong parke. Ang mga aktibidad tulad ng pag-inom ng alak at paninigarilyo ay ipinagbabawal sa loob ng parke.',
	},
	{
		q: 'Kailangan ba ng payong o kapote kapag bumibisita?',
		a: 'Depende sa panahon. Mula Hunyo hanggang Setyembre ay halos araw-araw ang ulan (humigit-kumulang 20–26 na araw ng ulan kada buwan), kaya kailangan ang kapote at sapatos na may grip. Suriin ang modyul ng panahon sa pahinang ito sa mismong araw ng pagbisita — mas mabilis magbago ang lagay ng klima sa elebasyong 1,500 metro.',
	},
	{
		q: 'Paano pumunta sa Burnham Park mula sa paliparan?',
		a: 'Mula Clark International Airport, sumakay ng bus o van na may rutang Baguio (karaniwang 3.5–5 oras ang biyahe). Mula sa mga paliparan sa Maynila, bumaba muna sa terminal ng provincial bus na pa-Baguio at maglakbay nang humigit-kumulang 5–7 oras depende sa trapiko. Pag dating sa Lungsod ng Baguio, jeepney, taxi, o lakad na 10–15 minuto papuntang parke.',
	},
	{
		q: 'Angkop ba ang Burnham Park para sa wheelchair at matatanda?',
		a: 'Oo sa mga pangunahing bahagi. Patag at sementado ang daanan sa paligid ng lagoon at maraming bangkong may lilim. Gayunpaman, limitado ang bilang ng accessible na palikuran, at may mga hagdan patungo sa ilang itaas na sona — planuhin ang rutang mananatili sa patag na bahagi.',
	},
	{
		q: 'May charging station ba para sa de-kuryenteng sasakyan at gasolinahan malapit sa parke?',
		a: 'Wala sa loob ng parke. Ang mga gasolinahan ay nasa mga pangunahing kalsada ng lungsod, ilang minutong biyahe mula sa parke. Limitado pa rin ang charging station para sa de-kuryenteng sasakyan sa paligid kaya planuhin ang charging stop bago umakyat ng Baguio.',
	},
	{
		q: 'Gaano katagal ang inirerekomendang half-day at full-day na ruta?',
		a: 'Ang half-day classic na ruta (Lagoon, Rose Garden, Melvin Jones, at Session Road) ay tumatagal nang 3–4 oras. Ang full-day explorer (kabilang ang pamamangka, Igorot Garden, pagbibisikleta, at tanghalian) ay 6–8 oras. Mayroon ding 2–3 oras na accessible-first na ruta para sa mababang lakas na pagbisita.',
	},
] as const;

// ---- TRANSPORTATION --------------------------------------------------------------
export const TRANSPORT_OPTIONS = [
	{
		icon: '🚕',
		title: 'Taxi / Grab',
		desc: 'Pinakamadaling paraan papuntang Burnham Park mula sa anumang bahagi ng Baguio. Ang karamihan sa mga taxi driver ay alam ang lokasyon ng parke. Ang Grab ay available rin sa Baguio.',
	},
	{
		icon: '🚌',
		title: 'Jeepney',
		desc: 'Ang pinakamurang paraan (₱13 minimum fare). Maraming ruta ng jeepney ang dumadaan sa paligid ng Burnham Park — magtanong lamang sa driver kung dadaan sila ng "Burnham" o "Session Road."',
	},
	{
		icon: '🚶',
		title: 'Paglalakad',
		desc: 'Kung nasa sentro ng Baguio ka, madaling lakarin ang Burnham Park. Ang parke ay nasa gitna ng lungsod — 10–15 minuto mula sa Session Road, Cathedral, o SM City Baguio.',
	},
	{
		icon: '🚗',
		title: 'Pribadong Sasakyan',
		desc: 'Kung may sarili kang sasakyan, may limitadong paradahan sa Jose Abad Santos Drive at Harrison Road. Dumating nang maaga (bago mag-9 AM) para masiguradong may parking space.',
	},
] as const;

// ---- LAKARIN MULA SA PARKE (walking distances) -----------------------------------
// Batay sa mga palatandaang nasa sentro ng Baguio — mga humigit-kumulang na halaga lamang.
export const WALKING_DISTANCES = [
	{
		from: 'Burnham Park → SM City Baguio',
		dist: '~500 m',
		walk: '7 minuto',
		note: 'Patag hanggang bahagyang paakyat sa huling bahagi — madaling lakarin mula sa gilid ng Session Road.',
	},
	{
		from: 'Burnham Park → Session Road',
		dist: 'Katabi',
		walk: '1–3 minuto',
		note: 'Diretsong tawid mula sa hilagang gilid ng parke — laging dumaan sa tamang tawiran.',
	},
	{
		from: 'Burnham Park → Baguio Cathedral',
		dist: '~700 m',
		walk: '10 minuto',
		note: 'Paakyat papuntang burol ng Cathedral — maglaan ng dagdag na oras kung may kasamang nakatatanda.',
	},
	{
		from: 'Burnham Park → Baguio Public Market',
		dist: '~800 m',
		walk: '10–12 minuto',
		note: 'Pababa papuntang Magsaysay Avenue — madalas na masikip tuwing hapon.',
	},
	{
		from: 'Burnham Park → mga hotel sa kabilog ng Session Road',
		dist: '~200–600 m',
		walk: '2–8 minuto',
		note: 'Tandaan na paakyat ang daan pabalik papuntang parke mula sa itaas na Session Road.',
	},
	{
		from: 'Burnham Park → Mines View Park',
		dist: '~3 km',
		walk: 'Huwag lakarin',
		note: 'Sumakay ng taxi o jeepney — 15–20 minuto depende sa trapiko sa kalsadang paakyat.',
	},
] as const;

// ---- AKTIBIDAD: LIBRE vs MAY BAYAD ------------------------------------------------
// Sinasadya naming hindi naglilimbag ng tiyak na halaga: ang mga bayad sa loob ng parke ay
// itinatakda ng mga concessionaire/operator at nagbabago depende sa panahon. Nilinaw dito
// kung alin ang libre at kung saan direktang magtatanong — upang hindi malinggi ang bisita.
export const PAID_ACTIVITIES = [
	{
		icon: '🛶',
		name: 'Pamamangka sa Lagoon (swan / pedal boat / sagwan)',
		saan: 'Burnham Lagoon boat station',
		bayad: 'May bayad',
		note: 'Direktang bayaran sa operator sa tabi ng lawa; kadalasang nakabatay sa oras o bilang ng sasakay. Walang nakapaskil na opisyal na rate card — itanong bago sumakay.',
	},
	{
		icon: '🚴',
		name: 'Upa ng bisikleta (single / double / sidecar)',
		saan: 'Mga tindahan ng upa sa gilid ng bike lane',
		bayad: 'May bayad',
		note: 'Karaniwang nakabatay sa oras. Tuwing Pebrero (Panagbenga) at Kapaskuhan ay maaaring iba ang presyo at mas mahaba ang pila.',
	},
	{
		icon: '🛼',
		name: 'Roller skating',
		saan: 'Skating Rink',
		bayad: 'May bayad',
		note: 'May upa ng skate sa lugar; magandang magtanong muna kapag Sabado o Linggo ng hapon dahil madalas masikip.',
	},
	{
		icon: '🐎',
		name: 'Pony ride para sa mga bata',
		saan: "Children's Playground",
		bayad: 'May bayad',
		note: 'Maikling ikot lamang; kasama ang gabay na humahawak ng tali.',
	},
	{
		icon: '🚻',
		name: 'Paggamit ng pampublikong palikuran',
		saan: 'Malapit sa mga pangunahing pasukan at lagoon',
		bayad: 'Maliit na bayad',
		note: 'Magdala ng barya — karaniwang hindi tumatanggap ng malaking pera.',
	},
	{
		icon: '🌳',
		name: 'Pagpasok sa parke, paglakad sa lagoon, Rose Garden, Igorot Garden, Athletic Bowl',
		saan: 'Buong Burnham Park',
		bayad: 'LIBRE',
		note: 'Walang entrance fee sa anumang bahagi ng parke — ito ang madalas na hindi malinaw sa mga unang beses na bumibisita.',
	},
] as const;

// ---- SEASONS --------------------------------------------------------------------
export const SEASONS = [
	{
		title: 'Tagtuyo (Nobyembre–Mayo)',
		desc: 'Pinakamagandang panahon para bumisita. Malamig pa rin ang temperatura (15–23°C) at kakaunti ang ulan. Ang Rose Garden ay puno ng bulaklak mula Nobyembre hanggang Marso.',
		icon: '🌤️',
	},
	{
		title: 'Panagbenga (Pebrero)',
		desc: 'Ang Baguio Flower Festival — isang buong buwan ng parada, sayawan, at pagdiriwang. Pinakamataong panahon: magplano nang maaga para sa matutuluyan at transportasyon.',
		icon: '🌸',
	},
	{
		title: 'Tag-Ulan (Hunyo–Oktubre)',
		desc: 'Malamig at maulan — maaaring sarado ang ilang pasilidad dahil sa bagyo. Mas kakaunti ang turista at mas mura ang hotel. Magdala ng kapote at waterproof bag.',
		icon: '🌧️',
	},
	{
		title: 'Pasko at Bagong Taon (Disyembre)',
		desc: 'Ang Baguio ay isa sa pinakasikat na destinasyon tuwing Kapaskuhan — malamig ang panahon, masaya ang kapaligiran. Asahan ang maraming tao at mas mataas na presyo ng hotel.',
		icon: '🎄',
	},
] as const;

// ---- PAGE IMAGES ----------------------------------------------------------------
export const PAGE_IMAGES = {
	hero: '/gallery/burnham-park-1.jpg',
	heroAlt: 'Burnham Lagoon panoramic view with swan boats and pine trees — Burnham Park Baguio scenic overview',
	aboutPark: '/gallery/burnham-park-2.jpg',
	aboutParkAlt: 'Wide view of Burnham Park with lush greenery and pine trees — the green heart of Baguio City',
	panagbenga: '/gallery/burnham-park-3.jpg',
	panagbengaAlt: 'Panagbenga Flower Festival grand float parade at Burnham Park Baguio — colorful flowers, crowd, and pine trees',
} as const;

// ---- PAGE META ------------------------------------------------------------------
export const PAGE_META = {
	home: {
		title: 'Burnham Park Baguio: Free Visitor Guide, Map & Hours',
		description:
			'Free guide to Burnham Park, Baguio City: park map, 24-hour opening times, free entrance, 12 attractions, food, hotels and transport.',
		eyebrow: '🏞️ Luntiang Puso ng Lungsod ng Baguio',
		hero: '/gallery/burnham-park-1.jpg',
		heroAlt:
			'Burnham Park — main view of Burnham Lagoon with swan boats and pine trees in Baguio, Benguet, Philippines',
	},
	privacy: {
		title: 'Patakaran sa Privacy — Burnham Park Baguio',
		description:
			'Patakaran sa privacy ng Burnham Park Baguio Guide: anong datos ang aming kinokolekta, paano namin ito ginagamit, ang mga serbisyo ng ikatlong partido, at ang iyong mga karapatan sa ilalim ng GDPR at iba pang naaangkop na batas.',
		eyebrow: '🏛️ Patakaran ng Proyekto',
		hero: '/gallery/burnham-park-12.jpg',
		heroAlt:
			'Tanawin ng Burnham Park para sa banner ng pahina ng Patakaran sa Privacy',
	},
	terms: {
		title: 'Mga Tuntunin ng Serbisyo — Burnham Park Baguio',
		description:
			'Mga tuntunin at legal na paunawa sa paggamit ng Burnham Park Baguio Guide: saklaw ng paggamit ng nilalaman, kawastuhan ng impormasyon, karapatan sa intelektwal na ari-arian, at limitasyon ng pananagutan.',
		eyebrow: '🏛️ Patakaran ng Proyekto',
		hero: '/gallery/burnham-park-13.jpg',
		heroAlt:
			'Tanawin ng Burnham Park para sa banner ng pahina ng Mga Tuntunin ng Serbisyo',
	},
	cookie: {
		title: 'Mga Setting ng Cookie — Burnham Park Baguio',
		description:
			'Paggamit ng cookie sa Burnham Park Baguio Guide: kinakailangang cookie, cookie para sa pagsusuri, cookie para sa kagustuhan, at cookie para sa pagmemerkado — pati na ang mga paraan ng pamamahala at pahintulot.',
		eyebrow: '🏛️ Patakaran ng Proyekto',
		hero: '/gallery/burnham-park-14.jpg',
		heroAlt:
			'Detalyeng tanawin ng Burnham Park para sa banner ng pahina ng Mga Setting ng Cookie',
	},
	history: {
		title: "Burnham Park History: Who Designed Baguio's Park?",
		description:
			"Burnham Park was laid out by Daniel Burnham in his 1905 plan for Baguio. How the Ibaloi pasture of Kafagway became today's park.",
		eyebrow: '📜 Kasaysayan at Pamana',
		hero: '/gallery/burnham-park-5.jpg',
		heroAlt: 'Makasaysayang bahagi ng Burnham Park Baguio na napapalibutan ng mga punong pine',
	},
	openingHours: {
		title: 'Burnham Park Opening Hours & Entrance Fee (2026)',
		description:
			'Is Burnham Park open 24 hours? Find the park’s opening times, free entrance information, 2026 boating updates, rental fees and tips for visiting at night.',
		eyebrow: '🕒 Oras, Bayad at mga Serbisyo',
		hero: '/gallery/burnham-park-6.jpg',
		heroAlt: 'Tanawin ng Burnham Park sa umaga habang naglalakad ang mga bisita sa lagoon',
	},
	howToGetThere: {
		title: 'How to Get to Burnham Park: Jeepney, Taxi & Parking',
		description:
			'Where Burnham Park is, how to get there by jeepney or taxi, walking distances from SM Baguio and Session Road, and where to park.',
		eyebrow: '🚌 Transportasyon at Paradahan',
		hero: '/gallery/burnham-park-7.jpg',
		heroAlt: 'Kalsada papuntang Burnham Park na may mga jeepney at punong pine sa Lungsod ng Baguio',
	},
	parkMap: {
		title: 'Burnham Park Map & 12 Attractions (Walking Guide)',
		description:
			'Interactive Burnham Park map plus all 12 zones — Lagoon, Rose Garden, Igorot Garden, Orchidarium, Athletic Bowl — with walking times.',
		eyebrow: '🗺️ Mapa at mga Atraksyon',
		hero: '/gallery/burnham-park-8.jpg',
		heroAlt: 'Aerial-style view ng Burnham Park na nagpapakita ng lawa at mga daanan',
	},
	food: {
		title: "Food Near Burnham Park: What to Eat in Baguio's Center",
		description:
			'What to eat near Burnham Park: strawberry taho, Cordilleran dishes, Session Road restaurants, and cheap eats 10 minutes away.',
		eyebrow: '🍓 Pagkain at Kainan',
		hero: '/gallery/burnham-park-9.jpg',
		heroAlt: 'Strawberry taho at mga lokal na pagkain malapit sa Burnham Park sa Baguio',
	},
	whereToStay: {
		title: 'Where to Stay Near Burnham Park (Walking Distances)',
		description:
			'Compare where to stay near Burnham Park — hotels 1–5 minutes away, Session Road, budget inns, and scenic stays that need a taxi.',
		eyebrow: '🏨 Matutuluyan Malapit sa Parke',
		hero: '/gallery/burnham-park-10.jpg',
		heroAlt: 'Mga hotel at gusali sa paligid ng Burnham Park sa sentro ng Lungsod ng Baguio',
	},
	faq: {
		title: 'Burnham Park FAQ: 15 Answers for First-Time Visitors',
		description:
			'Entrance fee, opening hours, boating, parking, night safety, Panagbenga crowds and wheelchair access — straight answers for visitors.',
		eyebrow: '❓ Mga Madalas Itanong',
		hero: '/gallery/burnham-park-11.jpg',
		heroAlt: 'Mga bisitang nagpapahinga sa tabi ng Burnham Lagoon sa Lungsod ng Baguio',
	},
} as const;

// ---- GALLERY IMAGES -------------------------------------------------------------
export const GALLERY_IMAGES = Array.from({ length: 18 }, (_, i) => ({
	src: `/gallery/burnham-park-${i + 1}.jpg`,
        alt: `Burnham Park Baguio — larawan ${i + 1} sa 18: tanawin ng parke, lagoon, rose garden, pine trees, at mga aktibidad`,
}));

// ---- DISCLAIMER -----------------------------------------------------------------
export const DISCLAIMER = {
	text: 'Ang Burnham Park Baguio Guide ay isang independiyente at di-komersyal na proyektong pang-impormasyon. Hindi kami kaakibat ng gobyerno ng Lungsod ng Baguio o ng CEPMO. Ang lahat ng impormasyon ay nakolekta mula sa pampublikong sanggunian at personal na karanasan — pinagsikapan naming maging tumpak ngunit hindi namin ginagarantiyahan ang pagkakumpleto nito. Walang anumang restaurant, hotel, o negosyo ang binabayaran upang mapasama sa gabay na ito. Para sa mga update at pagwawasto, maaaring makipag-ugnayan sa amin.',
};

// =================================================================================
//  MGA SERBISYO AT PASILIDAD PARA SA BISITA
//  Tanging URI lamang ng serbisyo ang binabanggit — walang partikular na pangalan ng
//  negosyo, tindahan, kainan, o hotel, upang manatiling obhetibo at walang komersyal
//  na rekomendasyon (non-profit na layunin).
// =================================================================================
export const VISITOR_SERVICES = [
	{
		group: 'Pangunahing Pasilidad',
		icon: '🚻',
		title: 'Palikuran at Lababo',
		location: 'Sa loob ng parke',
		desc: 'May mga pampublikong palikuran malapit sa pangunahing pasukan at paligid ng lagoon. Madalas ay may maliit na bayad — maghanda ng barya at sariling tissue o sabon.',
	},
	{
		group: 'Pangunahing Pasilidad',
		icon: '♿',
		title: 'Palikurang Accessible',
		location: 'Limitado',
		desc: 'Hindi lahat ng palikuran ay may cubicle para sa wheelchair o may hawakan para sa nakatatanda. Magtanong sa nakatokang bantay ng parke para sa pinakamalapit na accessible na pasilidad.',
	},
	{
		group: 'Pangunahing Pasilidad',
		icon: '🚰',
		title: 'Inuming Tubig',
		location: 'Magdala ng sarili',
		desc: 'Walang tiyak na drinking fountain sa bawat sona ng parke. Magdala ng sariling bote ng tubig; maraming convenience store at refilling station sa mga kalapit na kalsada.',
	},
	{
		group: 'Pangunahing Pasilidad',
		icon: '🪑',
		title: 'Bangko, Lilim, at Picnic Area',
		location: 'Sa loob ng parke',
		desc: 'Maraming bangko sa paligid ng lagoon at mga damuhan. Ang mga punong pine ay nagbibigay ng likas na lilim — mainam para sa piknik at pahinga ng pamilya.',
	},
	{
		group: 'Pangunahing Pasilidad',
		icon: '🗑️',
		title: 'Basurahan at Paghihiwalay ng Basura',
		location: 'Sa loob ng parke',
		desc: 'May mga lalagyan ng basura sa mga pangunahing daanan. Suportahan ang patakaran ng lungsod sa paghihiwalay ng basura at iuuwi ang hindi nabubulok kung kinakailangan.',
	},
	{
		group: 'Pangunahing Pasilidad',
		icon: '🛄',
		title: 'Lugar para sa Bag at Maliit na Bagaje',
		location: 'Walang opisyal na pasilidad',
		desc: 'Walang locker o opisyal na luggage drop sa loob ng parke. Kung may maleta, magtanong sa inyong matutuluyan o sa transport operator bago pumunta sa parke.',
	},
	{
		group: 'Kaginhawahan at Serbisyo',
		icon: '📱',
		title: 'Wi‑Fi at Koneksyon',
		location: 'Limitado',
		desc: 'Ang pampublikong wireless internet sa paligid ng parke ay pasulput-sulpot. Mas maaasahan ang sariling mobile data; mag-download nang maaga ng mapa at ticket.',
	},
	{
		group: 'Kaginhawahan at Serbisyo',
		icon: '🔌',
		title: 'Pag-charge ng Gadget',
		location: 'Wala sa loob ng parke',
		desc: 'Walang saksakan para sa publiko sa loob ng parke. Magdala ng power bank, lalo na kung gagamitin mo ang camera o mapa sa buong maghapon.',
	},
	{
		group: 'Kaginhawahan at Serbisyo',
		icon: '🍼',
		title: 'Pampamilyang Pangangailangan',
		location: 'Limitado',
		desc: 'Walang nakalaang nursing room sa parke; bilang pamalit, maraming bangkong may lilim at malalapit na convenience store. Magdala ng sariling diaper mat at gamit para sa sanggol.',
	},
	{
		group: 'Kaligtasan at Pangkalusugan',
		icon: '🛡️',
		title: 'Seguridad at Tulong Pang-emergency',
		location: 'Sa loob ng parke',
		desc: 'May nakatokang bantay at mga nagpapatrolyang security guard. Para sa emergency, tumawag sa pambansang linya ng emerhensiya at magtanong sa pinakamalapit na bantay ng parke.',
	},
	{
		group: 'Kaligtasan at Pangkalusugan',
		icon: '💊',
		title: 'Parmasya at Klinika',
		location: 'Malapit sa parke',
		desc: 'Maraming parmasya at convenience store na may basic first-aid supplies sa paligid ng Session Road. Para sa ospital at klinika, nasa loob lamang ng ilang minutong biyahe mula sa parke.',
	},
	{
		group: 'Kaligtasan at Pangkalusugan',
		icon: '🩹',
		title: 'First Aid para sa Sariling Lakad',
		location: 'Dala ng bisita',
		desc: 'Magdala ng sariling gamot, disinfectant, at plaster — lalo na kung kasama ang mga bata. Tuwing init ng tanghali, uminom ng tubig nang madalas dahil mataas pa rin ang UV sa elebasyong 1,500 metro.',
	},
	{
		group: 'Pamimili at Pagkain',
		icon: '🍽️',
		title: 'Uri ng Kainan sa Paligid',
		location: 'Malapit sa parke',
		desc: 'Karinderya, bakery, café, at mga nagtitinda ng meryenda — lahat ay uri lamang, walang partikular na itinatampok na establisimyento. Para sa mas mura, ang mga lokal na karinderya ay karaniwang nag-aalok ng lutong bahay na pagkain.',
	},
	{
		group: 'Pamimili at Pagkain',
		icon: '🛍️',
		title: 'Pamilihan at Sari-Sari',
		location: 'Malapit sa parke',
		desc: 'May palengke, supermarket, convenience store, at mga tindahan ng pasalubong sa mga kalapit na kalsada — karamihan ay 5–15 minutong lakad mula sa parke.',
	},
	{
		group: 'Pamimili at Pagkain',
		icon: '🎁',
		title: 'Pasalubong at Lokal na Produkto',
		location: 'Malapit sa parke',
		desc: 'Kabilang sa karaniwang pasalubong ang strawberry jam, lengua de gato, lokal na kape, at hinabing tela ng Cordillera. Bilhin nang direkta sa mga kooperatiba at pampublikong palengke para masuportahan ang lokal na mga manggagawa.',
	},
	{
		group: 'Mobility, Gasolina, at Pag-charge',
		icon: '🅿️',
		title: 'Paradahan',
		location: 'Sa paligid ng parke',
		desc: 'Limitadong paradahan sa gilid ng mga pangunahing kalsada. May ilang puwesto na angkop para sa tour bus at van, ngunit mabilis itong mapuno tuwing katapusan at pista.',
	},
	{
		group: 'Mobility, Gasolina, at Pag-charge',
		icon: '⛽',
		title: 'Gasolinahan',
		location: 'Labas ng parke',
		desc: 'Walang gasolinahan sa loob ng parke. Ang mga istasyon ng gasolina ay nasa mga pangunahing kalsada ng lungsod — ilang minutong biyahe mula sa parke.',
	},
	{
		group: 'Mobility, Gasolina, at Pag-charge',
		icon: '🔋',
		title: 'Charging para sa Sasakyang De‑kuryente',
		location: 'Labas ng parke',
		desc: 'Limitado pa rin ang charging station para sa de-kuryenteng sasakyan sa paligid. Planuhin ang charging stop bago bumiyahe patungong Baguio dahil matarik ang daan at mabilis maubos ang baterya.',
	},
	{
		group: 'Mobility, Gasolina, at Pag-charge',
		icon: '🚕',
		title: 'Punto ng Pagbaba at Pagkuha ng Pasahero',
		location: 'Sa paligid ng parke',
		desc: 'Karaniwang drop-off point ng taxi, ride-hailing, at jeepney ay nasa mga pangunahing pasukan. Ituro sa drayber ang gustong sona (halimbawa: Lagoon, Melvin Jones, o Rose Garden).',
	},
	{
		group: 'Mobility, Gasolina, at Pag-charge',
		icon: '🚲',
		title: 'Upa ng Bisikleta at Skates',
		location: 'Sa loob ng parke',
		desc: 'May mga nagpapaupa ng pampamilyang bisikleta, single bike, at roller skates sa loob ng parke. Magtanong sa mga operator para sa oras ng operasyon at presyo bago gamitin.',
	},
	{
		group: 'Pangangasiwa ng Parke',
		icon: '🏛️',
		title: 'Tanggapan ng Parke at Impormasyon',
		location: 'Sa loob ng parke',
		desc: 'Ang pang-araw-araw na pangangasiwa ay nasa City Environment and Parks Management Office (CEPMO) ng Lungsod ng Baguio. Para sa opisyal na abiso, sumangguni sa pahina ng pamahalaang lungsod.',
	},
] as const;

// =================================================================================
//  DETALYADONG GABAY SA TRANSPORTASYON
//  Mga hakbang papuntang Burnham Park mula sa paliparan, terminal, at sentro ng lungsod.
//  Lahat ng oras at pamasahe ay HUMIGIT-KUMULANG — sumangguni sa opisyal na tanggapan.
// =================================================================================
export const TRANSPORT_GUIDE = [
	{
		icon: '✈️',
		mode: 'Mula Clark International Airport (CRK)',
		duration: '3.5–5 oras kabuuan',
		fare: 'Iba-iba depende sa uri ng sasakyan',
		steps: [
			'Sumakay ng bus o van na may rutang pa-Baguio mula sa arrival area ng paliparan — maraming operator na may biyaheng ito.',
			'Bumababa sa terminal ng bus sa Lungsod ng Baguio (karaniwan ay Gov. Pack Road o nakatalagang compound ng operator).',
			'Mula sa terminal, sumakay ng taxi, jeepney, o maglakad nang humigit-kumulang 10–15 minuto papuntang Burnham Park.',
		],
		tip: 'Mas mainam ang biyahe sa umaga para maiwasan ang matinding trapiko sa Kennon o Marcos Highway.',
	},
	{
		icon: '🛫',
		mode: 'Mula paliparan sa Kalakhang Maynila / bumaba sa terminal ng bus',
		duration: '5–7 oras kabuuan (depende sa trapiko)',
		fare: 'Iba-iba depende sa klase ng bus',
		steps: [
			'Sumakay ng provincial bus na may rutang Baguio mula sa mga terminal sa Maynila (halimbawa: Cubao, Pasay, o iba pang terminal na may direct route pa-Baguio).',
			'Karaniwang dadaan ito sa North Luzon Expressway at Marcos Highway o Kennon Road.',
			'Pagdating sa Baguio, pumunta sa Burnham Park gamit ang taxi, jeepney, o lakad depende sa inyong destinasyon.',
		],
		tip: 'Tuwing Panagbenga (Pebrero) at Kapaskuhan, mag-book nang maaga — mabilis maubos ang upuan sa bus.',
	},
	{
		icon: '🚌',
		mode: 'Mula Terminal ng Bus sa Baguio',
		duration: '15–30 minuto papuntang parke',
		fare: 'Jeepney: karaniwang nasa katamtamang halaga ng lokal na pamasahe',
		steps: [
			'Bumaba sa Gov. Pack Road o sa compound ng inyong bus operator.',
			'Hanapin ang jeepney na may karatulang pa-Session Road, Burnham, o mga ruta na dumadaan sa sentro.',
			'Maaari ring direktang mag-taxi o maglakad papuntang parke mula sa terminal.',
		],
		tip: 'Kung marami ang bagahe o bata, mas praktikal ang taxi mula sa terminal — iwas na iwas rin sa madalas na lakad.',
	},
	{
		icon: '🚌',
		mode: 'Jeepney sa loob ng Lungsod ng Baguio',
		duration: '10–20 minuto depende sa trapiko',
		fare: 'Karaniwang nasa minimum fare ng lungsod (surian ang opisyal na rate)',
		steps: [
			'Hanapin ang jeepney na may karatulang dadaan ng Session Road, Burnham, o mga ruta pa-sentro.',
			'Sabihin nang maaga sa drayber ang bababaan (halimbawa: "Burnham" o pinakamalapit na pasukan).',
			'Magbayad kapag nakaupo na; may travel distance na karaniwang ₱13–₱15 kada tao.',
		],
		tip: 'Kadalasa’y siksikan sa loob ng jeepney — mas mainam na hindi maraming dalang bagahe.',
	},
	{
		icon: '🚕',
		mode: 'Taxi at Ride-Hailing',
		duration: '10–25 minuto depende sa trapiko',
		fare: 'Nakadepende sa metered fare at demand',
		steps: [
			'Mula sa sentro ng lungsod, sabihin sa drayber ang eksaktong pasukan: Lagoon, Rose Garden, Melvin Jones Grandstand, o Igorot Garden.',
			'Aabangan ang drop-off sa mga pangunahing kalsada malapit sa parke.',
			'Tanungin nang maaga kung metered o may nakapirming halaga ang biyahe.',
		],
		tip: 'Limitado ang bilang ng sasakyan tuwing peak season — maglaan ng dagdag na oras.',
	},
	{
		icon: '🚶',
		mode: 'Paglalakad mula sa mga paligid na landmark',
		duration: '5–15 minuto',
		fare: 'Walang bayad',
		steps: [
			'Mula sa Session Road: maglakad papuntang parke — mga 5–10 minuto.',
			'Mula sa Katedral ng Baguio: mga 10–15 minuto paakyat o pababa depende sa ruta.',
			'Mula sa SM City Baguio at mga hotel sa sentro: mga 10–15 minuto.',
		],
		tip: 'Laging gamitin ang mga itinalagang tawiran — siksik ang trapiko sa paligid ng parke.',
	},
	{
		icon: '🚗',
		mode: 'Pribadong Sasakyan at Inupahang Van',
		duration: 'Depende sa pinagmumulan',
		fare: 'Nakadepende sa uri ng sasakyan at distansya',
		steps: [
			'Itakda sa navigation ang harap na pasukan na pinakamalapit sa pupuntahang sona.',
			'Maghanap ng paradahan sa mga pangunahing kalsada sa paligid; limitado ito.',
			'Mas mainam dumating nang maaga (bago mag-9 ng umaga) lalo na tuwing katapusan para makuha ang puwesto.',
		],
		tip: 'Matarik at makipot ang ilang kalsada — tiyaking maayos ang preno at gulong ng sasakyan.',
	},
] as const;

// =================================================================================
//  TALA NG KLIMA (12 BUWAN) — mga karaniwang halaga para sa pagpaplano.
//  Halaga ay humigit-kumulang na karaniwan batay sa opisyal na tala ng klima para sa
//  Lungsod ng Baguio; palaging suriin ang ARAW-ARAW NA PAGTATAYA sa modyul ng panahon.
// =================================================================================
export const CLIMATE_MONTHS = [
	{ month: 'Enero', low: 10, high: 21, rain: 20, rainDays: 2, note: 'Pinakamalamig at pinakatuyo — mainam para sa sunrise walk.' },
	{ month: 'Pebrero', low: 11, high: 22, rain: 25, rainDays: 2, note: 'Buwan ng Panagbenga — lagumin ang dagsa ng tao.' },
	{ month: 'Marso', low: 13, high: 24, rain: 45, rainDays: 4, note: 'Huling bahagi ng pamumulaklak ng Rose Garden.' },
	{ month: 'Abril', low: 14, high: 25, rain: 85, rainDays: 6, note: 'Pinakamainit na panahon; magdala pa rin ng jacket para sa gabi.' },
	{ month: 'Mayo', low: 15, high: 24, rain: 230, rainDays: 14, note: 'Simula ng habagat — madalas na pag-ulan sa hapon.' },
	{ month: 'Hunyo', low: 16, high: 23, rain: 420, rainDays: 20, note: 'Tag-ulan: maulap ang tanawin sa mga viewpoint.' },
	{ month: 'Hulyo', low: 16, high: 22, rain: 700, rainDays: 25, note: 'Pinakamaulan; umpisahan ang biyahe nang maaga.' },
	{ month: 'Agosto', low: 16, high: 22, rain: 720, rainDays: 26, note: 'Madulas na daanan — magsuot ng sapatos na may grip.' },
	{ month: 'Setyembre', low: 15, high: 22, rain: 620, rainDays: 24, note: 'Huling bahagi ng tag-ulan; bantayan ang abiso ng bagyo.' },
	{ month: 'Oktubre', low: 14, high: 22, rain: 300, rainDays: 16, note: 'Unti-unting humuhupa ang ulan — mas kaunting turista.' },
	{ month: 'Nobyembre', low: 13, high: 22, rain: 90, rainDays: 8, note: 'Maaga nang malamig; simula ng mga dekorasyong pamasko.' },
	{ month: 'Disyembre', low: 12, high: 21, rain: 45, rainDays: 4, note: 'Kapaskuhan sa Baguio — pinakamataong panahon ng taon.' },
] as const;

// =================================================================================
//  ESTRATEHIYA SA PAGBISITA AYON SA PANAHON (kwarter / season-by-season planning)
// =================================================================================
export const SEASON_STRATEGY = [
	{
		season: 'Malamig na Tagtuyo',
		months: 'Nobyembre–Pebrero',
		icon: '❄️',
		temp: '10–22 °C',
		rain: 'Mababa (20–90 mm/buwan, humigit-kumulang)',
		condition: 'Mataas ang kalinawan ng tubig sa lagoon; malinis ang tanawin ng mga punong pine at namumulaklak ang Rose Garden mula huling bahagi ng Nobyembre.',
		crowd: 'Mataas tuwing Kapaskuhan at Panagbenga',
		gear: 'Jacket na pang-winter-level, kapote na maitutupi, payong, at guwantes para sa maagang umaga.',
		strategy: 'Pumunta bago mag-7 ng umaga para sa pinakamalinaw na liwanag sa litrato; iwasan ang huling dalawang linggo ng Pebrero kung ayaw sa dagsa ng tao.',
	},
	{
		season: 'Mainit-init na Tagtuyo',
		months: 'Marso–Mayo',
		icon: '🌤️',
		temp: '13–25 °C',
		rain: 'Unti-unting tumataas (45–230 mm/buwan, humigit-kumulang)',
		condition: 'Pinakamainit na bahagi ng taon sa Baguio. Mataas ang UV sa tanghali; bumababa ang tubig sa lagoon at mas kitang-kita ang mga halaman.',
		crowd: 'Katamtaman hanggang mataas (panahon ng bakasyon sa paaralan)',
		gear: 'Magaan na damit na may layering, sumbrero, sunscreen, at bote ng tubig.',
		strategy: 'Planuhin ang mga gawain sa labas ng parke mula 8–11 ng umaga at 4 na hapon pataas; magpahinga sa lilim sa tanghali.',
	},
	{
		season: 'Habagat at Tag-Ulan',
		months: 'Hunyo–Setyembre',
		icon: '🌧️',
		temp: '15–23 °C',
		rain: 'Sobrang taas (hanggang humigit-kumulang 700 mm/buwan)',
		condition: 'Maulap at madalas maulan; umaapaw ang runoff sa mga daanan at maulap ang lawa dahil sa sediment. Limitado ang kalidad ng tanawin sa malalayong viewpoint.',
		crowd: 'Pinakakaunti — pinakamurang panahon para sa matutuluyan',
		gear: 'Kapote na de-kalidad, waterproof bag para sa camera, sapatos na may grip, at ekstrang medyas.',
		strategy: 'Kasama sa plano ang indoor alternative: bantayan ang abiso ng bagyo bago ang biyahe at gawing flexible ang iskedyul.',
	},
	{
		season: 'Transisyon at Panahon ng Bagyo',
		months: 'Kalagitnaan ng Setyembre–Oktubre',
		icon: '🌦️',
		temp: '14–22 °C',
		rain: 'Humuhupa na (humigit-kumulang 300 mm/buwan)',
		condition: 'Kasabay ng pagbaba ng tubig-ulan, paborable ang kalagayan para sa pagmamasid sa mga halaman; kaunti ang turista at mabilis ang pagpasok sa mga atraksyon.',
		crowd: 'Mababa hanggang katamtaman',
		gear: 'Payong na pang-hang, multi-layer na damit, at proteksyon para sa electronics.',
		strategy: 'Suriin ang opisyal na abiso ng PAGASA bago bumiyahe; iwasan ang paglapit sa mga puno tuwing may malakas na hang.',
	},
] as const;

// =================================================================================
//  MGA RUTA AYON SA URI NG BISITA
// =================================================================================
export const VISITOR_PROFILES = [
	{
		icon: '👨‍👩‍👧‍👦',
		title: 'Pamilyang may mga Bata',
		tagline: 'Ruta para sa pamilyang may bata — ligtas, may lilim, at maraming palaruan',
		duration: '3–4 oras',
		pills: ['Pamilya', 'Bata 3–12 taong gulang'],
		stops: [
			{ place: 'Pangunahing Pasukan malapit sa Lagoon', minutes: 10, note: 'Malapad na daanan — madaling itulak ang stroller papasok.' },
			{ place: 'Pamamangka sa Lagoon', minutes: 40, note: 'Life vest para sa lahat; piliin ang bangkang may bubong para hindi mainitan.' },
			{ place: 'Palaruan at Pony Ride', minutes: 45, note: 'Mainam sa hapon; may bangko sa lilim para sa mga magulang.' },
			{ place: 'Mabilis na pamamasyal sa Rose Garden', minutes: 30, note: 'May mga hakbang kung kaya\'t dahan-dahan; dito rin ang pwesto para sa meryenda.' },
			{ place: 'Bangko sa Lilim malapit sa Lagoon', minutes: 20, note: 'Pahinga, picture-taking, at stratehikong pag-iwas sa tanghaling init.' },
		],
		notes: [
			'Magdala ng barya para sa palikuran, meryenda, at mga rental.',
			'Iwasan ang huling hapon tuwing katapusan — doon pinakamasikip ang daanan.',
			'Ituro sa mga bata na huwag lumusong sa lagoon at huwag pumitas ng bulaklak.',
		],
	},
	{
		icon: '📷',
		title: 'Litratista at Mahilig sa Kalikasan',
		tagline: 'Diin sa liwanag, detalye ng halaman, at tahimik na komposisyon',
		duration: '5–6 oras (whole morning hanggang golden hour)',
		pills: ['Photography', 'Botanical interest'],
		stops: [
			{ place: 'Lagoon Pier tuwing sunrise', minutes: 45, note: 'Salamin na tubig at reflected na mga puno — tripod recommended.' },
			{ place: 'Rose Garden', minutes: 50, note: 'Pinakamaganda ang mga bulaklak Nobyembre–Marso; close-up sa hamog.' },
			{ place: 'Pine tree pathway', minutes: 40, note: 'Backlit na fog at patterns ng balat ng puno.' },
			{ place: 'Igorot Garden', minutes: 35, note: 'Stone huts at etnobotanikal na halaman bilang background.' },
			{ place: 'Melvin Jones Grandstand sa hapon', minutes: 45, note: 'Golden-hour silhouette; open na komposisyon ng parke.' },
		],
		notes: [
			'Paborable ang kondisyon sa pagitan ng 6:30–8:30 ng umaga kapag kalmado pa ang tubig.',
			'Magdala ng microfiber cloth — karaniwang may hamog sa lens sa umaga.',
			'Mga ibon sa paligid ay mas aktibo sa madaling araw; gumamit ng natural na lilim bilang blind.',
		],
	},
	{
		icon: '♿',
		title: 'Mababang Lakas at Accessibility-First',
		tagline: 'Pinakakaunting hakbang, maraming lugar na maupuan',
		duration: '2–3 oras',
		pills: ['Wheelchair', 'Nakatatanda', 'Stroller'],
		stops: [
			{ place: 'Accessible na daanan sa paligid ng Lagoon', minutes: 30, note: 'Patag at sementadong daan; malapad na bangko para sa pahinga.' },
			{ place: 'Pamamangka (bangkang may bubong)', minutes: 30, note: 'Pinakamadaling paraan para makita ang lagoon nang hindi naglalakad nang malayo.' },
			{ place: 'Bangkong may lilim at tanawin ng tubig', minutes: 30, note: 'Paboritong lugar para sa tahimik na tanghali at pagmamasid ng ibon.' },
			{ place: 'Mabilis na pamamasyal sa Rose Garden sa patag na daan', minutes: 20, note: 'Dahan-dahan; iwasan ang mga hagdan at matarik na bahagi patungo sa mga itaas na sona.' },
		],
		notes: [
			'Pumili ng pasukang malapit sa target na sona — malaki ang parke at mahirap maglakad nang malayo.',
			'Maghanda ng payong/capote — limitado ang lugar na may bubong.',
			'Kung may escort, planuhin ang palikuran nang maaga; hindi lahat ay may accessible na cubicle.',
		],
	},
] as const;

// =================================================================================
//  INIREREKOMENDANG PANGKALAHATANG RUTA (Half-day / Full-day)
// =================================================================================
export const ITINERARIES = [
	{
		icon: '🌅',
		title: 'Half-Day Classic',
		tagline: '3–4 oras — para sa karamihan ng bisita',
		duration: '3–4 oras',
		pills: ['Unang pagbisita', 'Pamilya', 'Kaunting oras'],
		legs: [
			{ time: '6:30–7:00', title: 'Pagpasok malapit sa Lagoon', detail: 'Pumasok bago lumala ang trapiko; kumuha ng mapa at magtakda ng rendezvous point.' },
			{ time: '7:00–8:00', title: 'Pamamangka sa Lagoon', detail: '30–40 minutong pamamangka bago maging mainit — rito pinakamaganda ang ilaw.' },
			{ time: '8:00–9:00', title: 'Rose Garden at mga Flowering Beds', detail: 'Dahan-dahang lakad, kuha ng larawan, at halaman paboritong tanawin.' },
			{ time: '9:00–10:00', title: 'Melvin Jones Grandstand at malawak na damuhan', detail: 'Open na tanawin ng parke; tamang lugar para sa almusal-piknik.' },
			{ time: '10:00–11:00', title: 'Piperoute papuntang Session Road', detail: 'Labas ng parke papuntang sentro para sa tanghalian at pamimili ng pasalubong.' },
		],
	},
	{
		icon: '🗺️',
		title: 'Full-Day Explorer',
		tagline: '6–8 oras — para sa mas malalim na pagbisita',
		duration: '6–8 oras',
		pills: ['Buong araw', 'Walang madaliang pamamasyal', 'Budget-friendly'],
		legs: [
			{ time: '5:30–6:30', title: 'Sunrise walk sa paligid ng Lagoon', detail: 'Malamig na hangin at kaunting tao — perpekto para sa pagkuha ng larawan.' },
			{ time: '6:30–7:30', title: 'Almusal sa mga karinderya malapit sa parke', detail: 'Lutong-bahay na pagkain nang hindi lalayo sa parke.' },
			{ time: '7:30–9:00', title: 'Pamamangka at Paligid ng Tubig', detail: 'Pagsakay sa bangka at panood ng mga ibon sa gilid ng lawa.' },
			{ time: '9:00–10:30', title: 'Igorot Garden at mga Cultural Marker', detail: 'Punto para sa kasaysayan at disenyo ng parkeng lumang panahon.' },
			{ time: '10:30–12:00', title: 'Pagbibisikleta o Roller Skating', detail: 'Pampamilyang bisikleta o skates para maikot ang mas malayong mga sona.' },
			{ time: '12:00–14:00', title: 'Tanghalian at Pahinga sa Lilim', detail: 'Picnic o kainan sa Session Road; umiwas sa tanghaling init.' },
			{ time: '14:00–16:00', title: 'Pine Grove at Melvin Jones Grandstand', detail: 'Mahabang lakad sa lilim ng mga pine; open na tanawin sa hapon.' },
			{ time: '16:00–17:30', title: 'Golden hour at Pamamasyal sa mga Pasalubong', detail: 'Huling kuha ng larawan bago lumabas papuntang sentro ng lungsod.' },
		],
	},
] as const;

// =================================================================================
//  AGHAM AT RESPONSIBILIDAD NG BISITA (edukasyon at pangangalaga)
// =================================================================================
export const SCIENCE_NOTES = [
	{
		icon: '🌲',
		title: 'Bakit mahalaga ang mga Pine sa parke',
		desc: 'Ang mga punong pine (lalo na ang Benguet pine) ay nasa nawawala nang uri ng kagubatan sa Cordillera. Ang kaniyang mga karayom ay nagpapababa ng bilis ng tubig-ulan, pinipigilan ang pagguho ng lupa sa matatarik na dalisdis, at nagbibigay ng lilim at tirahan ng mga ibon at insekto.',
	},
	{
		icon: '💧',
		title: 'Paano nagbabago ang lagoon',
		desc: 'Ang lawa ay artipisyal at nakasalalay sa ulan at pamamahala ng tubig. Tuwing tag-ulan, tumataas ang sediment at bumababa ang kalinawan; tuwing tagtuyo, mas mababa ang lebel ngunit mas malinaw ang tubig. Ipinagbabawal ang paglangoy — para ito sa kaligtasan at kalinisan ng tubig.',
	},
	{
		icon: '🐦',
		title: 'Urban ecology sa gitna ng lungsod',
		desc: 'Isang "green island" ang Burnham Park para sa mga ibon at pollinator sa sentro ng Baguio. Mas aktibo ang mga ibon sa madaling araw — iwasan ang ingay at huwag magpakain ng tinapay o processed food sa wildlife.',
	},
	{
		icon: '🏔️',
		title: 'Bakit iba ang klima dito',
		desc: 'Nasa humigit-kumulang 1,500 metro sa ibabaw ng dagat ang Baguio — kaya mas malamit at mas mabilis magbago ang panahon. Ang hamog at ulap na bumabalot sa parke ay resulta ng pag-angat ng hanging puno ng halumigmig mula sa mababang kapatagan.',
	},
	{
		icon: '🕊️',
		title: 'Pamanang kultural ng Kafagway',
		desc: 'Ang parke ay nakatayo sa dating lupain ng mga Ibaloi. Ang pagkilala sa kasaysayang ito ay bahagi ng responsabling turismo: ituring na pamana ang lugar, hindi lamang photo opportunity.',
	},
	{
		icon: '♻️',
		title: 'Leave No Trace: uwiin ang sariling basura',
		desc: 'Kapag puno ang mga lalagyan, ibaon po sa susunod — iuwi ang balot, plastic, at baso. Ang mga naiwang basura ay nakakabara ng drainage tuwing habagat at nakakasira ng tirahan ng wildlife.',
	},
	{
		icon: '🚭',
		title: 'Mga tuntunin sa loob ng parke',
		desc: 'Karaniwang ipinagbabawal ang paninigarilyo, pag-inom ng alak, pagpitas ng bulaklak, pag-akyat sa puno, at paglangoy sa lagoon. Ang mga patakarang ito ay konsultasyon ng pamahalaang lungsod — sumunod sa mga karatula at paalala ng bantay.',
	},
	{
		icon: '🤝',
		title: 'Suportahan ang lokal at etikal na turismo',
		desc: 'Bumili nang direkta sa mga kooperatiba at pampublikong palengke, gumamit ng pampublikong transportasyon kapag posible, at igalang ang mga nakatira at nagtratrabaho sa parke.',
	},
] as const;
