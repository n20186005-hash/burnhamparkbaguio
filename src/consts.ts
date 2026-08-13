// ---- SITE ----------------------------------------------------------------------
export const SITE = {
	name: 'Burnham Park Baguio',
	projectName: 'Burnham Park Baguio Guide',
	author: 'Burnham Park Guide',
	siteUrl: 'https://burnhamparkbaguio.com',
	language: 'fil',
	address: 'Jose Abad Santos Drive, Baguio, Benguet 2600',
	coordinates: { lat: 16.4129, lng: 120.5934 },
	mapsUrl: 'https://maps.app.goo.gl/BurnhamParkBaguio',
	mapsEmbed: 'https://www.google.com/maps?q=Burnham%20Park%20Baguio&output=embed',
	jurisdiction: {
		attractionName: 'Burnham Park',
		cityHall: 'Baguio City Hall',
		tourismOffice: 'Baguio City Tourism Office',
		nationalTourismAgency: 'Philippine Department of Tourism (DOT)',
		region: 'Cordillera Administrative Region (CAR)',
		country: 'Republic of the Philippines',
	},
	officialSources: {
		en: [
			'Baguio City Hall',
			'Baguio City Tourism Office',
			'Philippine Department of Tourism (DOT)',
		],
	},
} as const;

// ---- NAVIGATION (single-page anchors) ------------------------------------------
export const NAV = [
	{ href: '#tungkol', label: 'Tungkol' },
	{ href: '#kasaysayan', label: 'Kasaysayan' },
	{ href: '#atraksyon', label: 'Mga Atraksyon' },
	{ href: '#gawain', label: 'Mga Gawain' },
	{ href: '#praktikal', label: 'Praktikal na Impormasyon' },
	{ href: '#transportasyon', label: 'Transportasyon' },
	{ href: '#kalapit', label: 'Mga Kalapit na Atraksyon' },
	{ href: '#galeriya', label: 'Galeriya' },
	{ href: '#mapa', label: 'Mapa' },
	{ href: '#tip', label: 'Mga Tip' },
	{ href: '#faq', label: 'FAQ' },
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
		year: 'Mula 1995 hanggang Ngayon',
		title: 'Pamamahala ng Lungsod ng Baguio',
		desc: 'Inilipat ang pang-araw-araw na pangangalaga sa <strong>City Environment and Parks Management Office (CEPMO)</strong> ng Lungsod ng Baguio. Noong 2018, muling inayos ang 12 na cluster o sona ng parke.',
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
		title: 'Burnham Park Baguio — Luntiang Puso ng Lungsod | Libreng Gabay sa Parke',
		description:
			'Kumpletong gabay sa Burnham Park Baguio — 12 na atraksyon, kasaysayan, mga gawain, mapa, oras ng pagbisita, at praktikal na impormasyon. Libre, di-komersyal, at para sa lahat.',
		eyebrow: '🏞️ Luntiang Puso ng Lungsod ng Baguio',
		hero: '/gallery/burnham-park-1.jpg',
		heroAlt: 'Burnham Lagoon with swan boats and surrounding pine trees in Baguio City — panoramic view',
	},
	privacy: {
		title: '隐私政策 · Burnham Park Baguio',
		description:
			'Burnham Park Baguio 独立旅游信息网站的隐私政策：说明我们收集的信息范围、使用方式、第三方服务以及您在 GDPR 及相关法规下享有的各项权利。',
		eyebrow: '法律信息',
		hero: '/gallery/burnham-park-12.jpg',
		heroAlt: 'Burnham Park Baguio 景观照片，用于隐私政策页面顶部横幅',
	},
	terms: {
		title: '服务条款 · Burnham Park Baguio',
		description:
			'Burnham Park Baguio 服务条款：包括内容使用范围、信息准确性、知识产权、责任限制以及访问本网站即视为同意的法律声明。',
		eyebrow: '法律信息',
		hero: '/gallery/burnham-park-13.jpg',
		heroAlt: 'Burnham Park Baguio 绿树与步行道照片，用于服务条款页面顶部横幅',
	},
	cookie: {
		title: 'Cookie 设置 · Burnham Park Baguio',
		description:
			'Burnham Park Baguio Cookie 使用说明：必要 Cookie、分析型 Cookie、偏好 Cookie 与营销 Cookie 的用途、开关方式以及同意管理机制。',
		eyebrow: '法律信息',
		hero: '/gallery/burnham-park-14.jpg',
		heroAlt: 'Burnham Park Baguio 公园细节照片，用于 Cookie 设置页面顶部横幅',
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
