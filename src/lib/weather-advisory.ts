/**
 * Payo batay sa lagay ng panahon.
 *
 * Ang layunin ng modyul na ito ay hindi magpakita lamang ng numero, kundi magbigay ng
 * agad na magagamit na payo para sa ordinaryong bisita: ano ang isusuot, paano magplano,
 * ano ang dadalhin, at kung may dapat ikabahala. Ang mga payo ay nabubuo lamang kapag
 * natugunan ang kondisyon — hindi ipinapakita ang mga hindi angkop sa kasalukuyang araw.
 */

export type WeatherFacts = {
	/** WMO weather code ng pinagmumulan ng datos. */
	code: number;
	/** Temperatura ngayon (°C). */
	temp: number;
	/** Pakiramdam na temperatura (°C). */
	apparent: number;
	/** Halumigmig (%). */
	humidity: number;
	/** Bilis ng hangin (km/h). */
	wind: number;
	/** Bugso ng hangin (km/h). */
	gust: number;
	/** Ulan na nahulog sa kasalukuyang oras (mm). */
	precip: number;
	/** Tsansa ng ulan ngayon (%). */
	pop: number;
	/** Kabuuang ulan na inaasahan ngayon (mm). */
	sum: number;
	/** Init ng araw (UV index). */
	uv: number;
	/** Pinakamataas na temperatura ngayon (°C). */
	max: number;
	/** Pinakamababang temperatura ngayon (°C). */
	min: number;
};

export type WeatherAdvice = {
	/** Isang linya na buod ng araw. */
	headline: string;
	/** Tugon sa tanong na "kailangan ba ng payong?". */
	umbrella: string;
	/** Mga babalang pangkaligtasan — pinakamataas na prayoridad. */
	alerts: string[];
	/** Ano ang isusuot. */
	outfit: string[];
	/** Paano magplano ng paglilibot. */
	plan: string[];
	/** Ano ang dadalhin. */
	gear: string[];
};

/** WMO weather codes → icon at maikling paglalarawan sa Filipino. */
export const CODE_MAP: Record<number, { icon: string; label: string }> = {
	0: { icon: '☀️', label: 'Maaliwalas' },
	1: { icon: '🌤️', label: 'Kakaunting ulap' },
	2: { icon: '⛅', label: 'Bahagyang makulimlim' },
	3: { icon: '☁️', label: 'Makulimlim' },
	45: { icon: '🌫️', label: 'Makapal na hamog' },
	48: { icon: '🌫️', label: 'Hamog na nagyeyelo' },
	51: { icon: '🌦️', label: 'Mahinang ambon' },
	53: { icon: '🌦️', label: 'Katamtamang ambon' },
	55: { icon: '🌦️', label: 'Malakas na ambon' },
	56: { icon: '🌧️', label: 'Ambon na nagyeyelo' },
	57: { icon: '🌧️', label: 'Ambon na nagyeyelo' },
	61: { icon: '🌧️', label: 'Mahinang ulan' },
	63: { icon: '🌧️', label: 'Katamtamang ulan' },
	65: { icon: '🌧️', label: 'Malakas na ulan' },
	66: { icon: '🌧️', label: 'Ulan na nagyeyelo' },
	67: { icon: '🌧️', label: 'Ulan na nagyeyelo' },
	71: { icon: '🌨️', label: 'Mahinang niyebe' },
	73: { icon: '🌨️', label: 'Katamtamang niyebe' },
	75: { icon: '🌨️', label: 'Malakas na niyebe' },
	77: { icon: '🌨️', label: 'Mga butil ng niyebe' },
	80: { icon: '🌦️', label: 'Pasulput-sulpot na ulan' },
	81: { icon: '🌧️', label: 'Pasulput-sulpot na ulan' },
	82: { icon: '⛈️', label: 'Malakas na bugso ng ulan' },
	85: { icon: '🌨️', label: 'Bugso ng niyebe' },
	86: { icon: '🌨️', label: 'Malakas na bugso ng niyebe' },
	95: { icon: '⛈️', label: 'Pagkulog at pagkidlat' },
	96: { icon: '⛈️', label: 'Pagkidlat na may yelo' },
	99: { icon: '⛈️', label: 'Malakas na pagkidlat na may yelo' },
};

const FALLBACK = { icon: '🌡️', label: 'Hindi tiyak ang lagay ng panahon' };

export function describeCode(code: number): { icon: string; label: string } {
	return CODE_MAP[code] ?? FALLBACK;
}

/** Unang bahagi ng pinagmumulan ng datos ng panahon (naka-encode). */
export const WEATHER_ENDPOINT_PREFIX = 'aHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/';

export function windPhrase(kmh: number): string {
	if (!Number.isFinite(kmh)) return 'Hindi tiyak ang lakas ng hangin';
	if (kmh < 12) return 'Mahina ang hangin';
	if (kmh < 29) return 'Katamtaman ang hangin';
	if (kmh < 39) return 'Medyo malakas ang hangin';
	if (kmh < 50) return 'Malakas ang hangin';
	if (kmh < 62) return 'Napakalakas ng hangin';
	return 'Hagupit ang lakas ng hangin';
}

export function uvPhrase(uv: number): string {
	if (!Number.isFinite(uv)) return 'Hindi tiyak ang init ng araw';
	if (uv >= 11) return 'Sobrang lakas ng init ng araw';
	if (uv >= 8) return 'Malakas ang init ng araw';
	if (uv >= 5) return 'Katamtamang lakas ng init ng araw';
	if (uv >= 3) return 'Banayad na init ng araw';
	return 'Mahina ang init ng araw';
}

export function feelPhrase(apparent: number): string {
	if (!Number.isFinite(apparent)) return 'Hindi tiyak ang pakiramdam';
	if (apparent <= 8) return 'Sobrang lamig sa pakiramdam';
	if (apparent <= 14) return 'Malamig sa pakiramdam';
	if (apparent <= 19) return 'Malamig-lamig sa pakiramdam';
	if (apparent <= 26) return 'Komportable sa pakiramdam';
	if (apparent <= 30) return 'Medyo mainit sa pakiramdam';
	return 'Mainit sa pakiramdam';
}

export function airPhrase(humidity: number): string {
	if (!Number.isFinite(humidity)) return 'Hindi tiyak ang hangin';
	if (humidity >= 85) return 'Mabigat at mahalumigmig ang hangin';
	if (humidity <= 45) return 'Tuyo ang hangin';
	return 'Katamtaman ang hangin';
}

const FOG_CODES = new Set([45, 48]);
const DRIZZLE_CODES = new Set([51, 53, 55, 56, 57]);
const MODERATE_CODES = new Set([61, 63, 66, 67, 80, 81]);
const HEAVY_CODES = new Set([65, 82]);
const THUNDER_CODES = new Set([95, 96, 99]);
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);

const num = (v: number, fallback = 0) => (Number.isFinite(v) ? v : fallback);

/**
 * Bumubuo ng mga payo mula sa mga numero ng panahon.
 * Tanging mga angkop lamang sa kasalukuyang kondisyon ang ibinabalik.
 */
export function buildAdvice(f: WeatherFacts): WeatherAdvice {
	const code = num(f.code, 3);
	const temp = num(f.temp);
	const apparent = num(f.apparent, temp);
	const humidity = num(f.humidity, 70);
	const wind = num(f.wind);
	const gust = num(f.gust, wind);
	const precip = num(f.precip);
	const pop = Math.max(0, Math.min(100, num(f.pop)));
	const sum = num(f.sum);
	const uv = num(f.uv);
	const max = num(f.max, temp);
	const min = num(f.min, apparent);

	const clear = code === 0 || code === 1;
	const soft = code === 2 || code === 3;
	const foggy = FOG_CODES.has(code);
	const drizzle = DRIZZLE_CODES.has(code);
	const moderate = MODERATE_CODES.has(code);
	const heavy = HEAVY_CODES.has(code) || sum >= 30 || precip >= 5;
	const thunder = THUNDER_CODES.has(code);
	const snowy = SNOW_CODES.has(code);
	const raining = precip > 0 || drizzle || moderate || heavy || thunder || snowy;
	const spread = Math.max(0, max - min);
	const strongWind = wind >= 39 || gust >= 50;
	const stormWind = wind >= 50 || gust >= 62;

	const alerts: string[] = [];
	const outfit: string[] = [];
	const plan: string[] = [];
	const gear: string[] = [];

	/* ------------------------------------------------------------------ *
	 * 🚨 Babala — kapag may nagana, ito ang unang binabasa ng bisita.     *
	 * ------------------------------------------------------------------ */
	if (thunder) {
		alerts.push(
			'May pagkulog at pagkidlat — huwag sumakay sa bangka sa lagoon, lumayo sa matataas na puno ng pine, sa bakanteng lote at sa bukas na parang.'
		);
	}
	if (heavy) {
		alerts.push(
			'Malakas na ulan ang inaasahan — madulas ang mga daanan at hagdan sa parke, maaaring umapaw ang mabababang bahagi malapit sa lagoon, at may panganib na pagguho ng lupa sa mga kalsadang paakyat papuntang Baguio.'
		);
	}
	if (stormWind) {
		alerts.push(
			'Napakalakas ng hangin — iwasan ang paglakad sa ilalim ng matataas na puno, mga tolda, at malalaking palatandaan.'
		);
	}
	if (foggy) {
		alerts.push(
			'Makapal na hamog, kaya limitado ang tanawin — mag-ingat nang husto kung nagmamaneho sa paakyat na kalsada papuntang Baguio.'
		);
	}
	if (uv >= 11) {
		alerts.push(
			'Sobrang lakas ng init ng araw — limitahan ang pagbibilad at panatilihin ang oras sa lilim mula 11 ng umaga hanggang 3 ng hapon.'
		);
	}
	if (apparent <= 8) {
		alerts.push(
			'Sobrang lamig ng pakiramdam — magsuot ng makapal na jacket, lalo na sa madaling araw at paglubog ng araw.'
		);
	}
	if (snowy) {
		alerts.push(
			'May ulan na nagyeyelo o niyebe — hindi karaniwan sa Baguio, kaya asahan ang matinding lamig at madulas na daanan.'
		);
	}

	/* ------------------------------------------------------------------ *
	 * ✅ Paano magplano ng paglilibot.                                     *
	 * ------------------------------------------------------------------ */
	if (alerts.length > 0) {
		const severe = thunder || heavy || stormWind || snowy;
		plan.push(
			severe
				? 'Unahin ang kaligtasan: kung maaari, ipagpaliban muna ang biyahe o piliin ang mga lugar na may bubong sa sentro ng lungsod.'
				: 'Magplano nang may pag-iingat: piliin ang mga ruta na malapit sa pasilidad, banyo, at paradahan.'
		);
	}

	if (pop >= 60) {
		plan.push(
			`Mataas ang tsansa ng ulan (${pop}%) — maglaan ng planong may bubong: mga museo, aklatan, at mga sakop na pasilidad malapit sa Session Road.`
		);
		plan.push(
			'Maaaring suspindihin ang pamamangka sa lagoon at iba pang aktibidad sa tubig kapag malakas ang ulan o hangin.'
		);
	} else if (pop >= 30) {
		plan.push(
			`May tsansa ng maikling ulan (${pop}%) — ihanda ang payong kung maglalakad nang matagal sa paligid ng lawa.`
		);
	}

	if (thunder || heavy) {
		plan.push(
			'Hindi angkop ang kumpletong lakad sa labas ngayon — piliin ang maikling ruta na malapit sa mga pasilidad, banyo, at paradahan.'
		);
	} else if (clear) {
		plan.push('Maaliwalas — mainam maglakad sa paligid ng Burnham Lagoon at sa lilim ng mga pine.');
		plan.push('Pinakamagandang liwanag para sa litrato: bago mag-9 ng umaga at mula 4 ng hapon.');
	} else if (soft) {
		plan.push(
			'Malambot ang liwanag dahil makulimlim — maganda para sa portrait at litrato ng mga bulaklak, at hindi nakakasilaw.'
		);
	} else if (drizzle) {
		plan.push(
			'May ambon: kaunti lamang ang nababawas sa tanawin, kaya maari pa ring maglakad — subalit madulas ang mga daanan at hagdan.'
		);
	} else if (foggy) {
		plan.push(
			'Limitado ang malayuang tanawin — mas mainam ang malalapit na detalye: mga rosas sa Rose Garden, mga orchid, at arkitektura sa lilim ng pine.'
		);
	}

	if (spread > 8 && !thunder) {
		plan.push(
			`Malaki ang pagbabago ng temperatura ngayon (mula ${min}°C hanggang ${max}°C) — simulan nang maaga ang lakad at huwag magtagal paglubog ng araw.`
		);
	}

	if (max >= 26 && clear) {
		plan.push(`Medyo mainit sa tanghali (${max}°C) — magpahinga sa lilim mula 11 ng umaga hanggang 3 ng hapon.`);
	}

	if (strongWind && !stormWind) {
		plan.push(
			'Malakas ang hangin — maaaring hindi payagan ang swan boat sa lagoon; iwasan din ang payong na mahaba.'
		);
	}

	if (plan.length === 0) {
		plan.push('Angkop ang araw para sa karaniwang paglilibot sa parke — walang hadlang sa paglalakad at pagkuha ng litrato.');
	}

	/* ------------------------------------------------------------------ *
	 * 👕 Ano ang isusuot.                                                  *
	 * ------------------------------------------------------------------ */
	if (max >= 26) {
		outfit.push(`Mainit-init sa tanghali (${max}°C) — magsuot ng magaan at preskong damit.`);
	}
	if (apparent <= 18 || min <= 15) {
		outfit.push(`Malamig ang pakiramdam (${apparent}°C ngayon, pinakamababa na ${min}°C) — magdala ng jacket o hoodie.`);
	}
	if (min <= 10) {
		outfit.push('Malamig nang husto sa madaling araw — isama ang scarf, guwantes, at medyas na makapal.');
	}
	if (spread > 8) {
		outfit.push(`Malaki ang agwat ng init sa araw at lamig sa gabi (${spread}°C) — mag-layer ng damit na madaling tanggalin.`);
	}
	if (raining || pop >= 60) {
		outfit.push(
			strongWind
				? 'Mas praktikal ang kapote o jacket na hindi tinatagusan ng tubig kaysa payong dahil malakas ang hangin.'
				: 'Magsuot ng damit na mabilis matuyo at magdala ng kapote.'
		);
	}
	if (humidity >= 85) {
		outfit.push('Mabigat at mahalumigmig ang hangin — pumili ng damit na presko at mabilis matuyo.');
	} else if (humidity <= 45) {
		outfit.push('Tuyo ang hangin — magdala ng lip balm at uminom ng tubig nang madalas.');
	}
	if (outfit.length === 0) {
		outfit.push('Komportable ang temperatura — sapat na ang karaniwang damit panlakad na may manipis na pang-labas.');
	}

	/* ------------------------------------------------------------------ *
	 * 🎒 Ano ang dadalhin.                                                 *
	 * ------------------------------------------------------------------ */
	if (raining || pop >= 60) {
		gear.push(
			strongWind
				? 'Kapote sa halip na payong — madaling mabaluktot ang payong kapag malakas ang hangin.'
				: 'Payong na maitutupi.'
		);
	} else if (pop >= 30) {
		gear.push('Payong na maitutupi — mabilis magbago ang panahon sa bundok.');
	}
	if (uv >= 8) {
		gear.push('Sunscreen, sunglasses, at sumbrero — malakas ang init ng araw sa tanghali.');
	} else if (uv >= 5) {
		gear.push('Sunscreen at sumbrero — katamtamang lakas ang init ng araw.');
	} else if (uv >= 3 && clear) {
		gear.push('Manipis na sunscreen kung magtatagal sa labas.');
	}
	if (max >= 26) {
		gear.push('Bote ng tubig na maaaring punuan muli.');
	}
	if (min <= 15) {
		gear.push('Jacket o hoodie para sa gabi.');
	}
	if (raining || pop >= 40) {
		gear.push('Sapatos na hindi madulas at ekstrang medyas.');
	}
	if (apparent <= 12) {
		gear.push('Guwantes at scarf para sa madaling araw.');
	}
	if (foggy) {
		gear.push('Maskara kung sensitibo sa malamig at mahalumigmig na hangin.');
	}
	if (gear.length === 0) {
		gear.push('Wala pang kailangang espesyal na gamit — dalhin lamang ang tubig at payong na maitutupi.');
	}

	/* ------------------------------------------------------------------ *
	 * Buod at tanong na "kailangan ba ng payong?"                          *
	 * ------------------------------------------------------------------ */
	let headline: string;
	if (thunder) headline = 'May pagkulog at pagkidlat — unahin ang kaligtasan.';
	else if (heavy) headline = 'Malakas na ulan — limitado ang gawain sa labas.';
	else if (foggy) headline = 'Makapal na hamog — maikli ang tanawin.';
	else if (pop >= 60) headline = 'Malamang umulan — maghanda ng payong.';
	else if (clear) headline = 'Maaliwalas — magandang araw para maglakad sa parke.';
	else if (soft) headline = 'Makulimlim ngunit panatag — mabuti para sa tahimik na paglilibot.';
	else if (raining) headline = 'Umuulan nang mahina — maikling lakad lamang.';
	else headline = 'Katamtaman ang lagay ng panahon — angkop para sa paglilibot.';

	let umbrella: string;
	if (raining || pop >= 60) {
		umbrella = `Oo — kailangan ang payong (${pop}% na tsansa ng ulan ngayon).`;
	} else if (pop >= 30) {
		umbrella = `Maaaring hindi kailanganin, subalit magbaon ng payong na maitutupi (${pop}% na tsansa ng ulan).`;
	} else {
		umbrella = 'Hindi kailangan sa ngayon, pero magbaon ng payong na maitutupi dahil mabilis magbago ang panahon sa bundok.';
	}

	return { headline, umbrella, alerts, outfit, plan, gear };
}

/** Pinaikling payo para sa bawat araw ng pitong araw na pagtataya. */
export function buildDayHint(code: number, pop: number, min: number, max: number): string {
	if (THUNDER_CODES.has(code)) return 'Pagkidlat — iwasan ang lawa';
	if (HEAVY_CODES.has(code)) return 'Malakas na ulan';
	if (SNOW_CODES.has(code)) return 'Matinding lamig';
	if (FOG_CODES.has(code)) return 'Makapal na hamog';
	if (pop >= 60) return 'Magdala ng payong';
	if (MODERATE_CODES.has(code) || DRIZZLE_CODES.has(code)) {
		return pop >= 40 ? 'Ulan — dalhin ang payong' : 'Posibleng maikling ulan';
	}
	if (code <= 1) return 'Maaliwalas';
	if (min <= 12) return 'Malamig sa madaling araw';
	if (max >= 26) return 'Mainit sa tanghali';
	if (pop >= 30) return 'Posibleng maikling ulan';
	return 'Angkop maglakad';
}
