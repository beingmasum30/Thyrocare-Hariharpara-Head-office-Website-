export interface HariharparaVillage {
  id: string;
  name_bn: string;
  name_en: string;
  pincode: string;
  alternative_pincode?: string;
  branch_post_office: string; // শাখা ডাকঘর (B.O.)
  sub_post_office: string;    // মূল সাব পোস্ট অফিস (S.O.)
  gram_panchayat: string;     // গ্রাম পঞ্চায়েত (G.P.)
  zone: 'main' | 'special';
  block?: 'Hariharpara' | 'Nowda';
  note_bn?: string;
  is_custom?: boolean;
  created_at?: string;
}

export const PINCODES = ['All', '742166', '742182', '742175', '742165', '742121', '742122'] as const;

export const HARIHARPARA_VILLAGES: HariharparaVillage[] = [
  // ================= ১. বিশেষ পিনকোড জোন (742182, 742175 ও 742165) =================
  {
    id: 'choa',
    name_bn: 'চোয়া',
    name_en: 'Choa',
    pincode: '742182',
    alternative_pincode: '742166',
    branch_post_office: 'Choa B.O',
    sub_post_office: 'Choa S.O / Amtala Delivery',
    gram_panchayat: 'Choa G.P',
    zone: 'special',
    note_bn: 'বিকল্পে 742166 প্রযোজ্য'
  },
  {
    id: 'south_pathanpara',
    name_bn: 'দক্ষিণ পাঠানপাড়া',
    name_en: 'South Pathanpara',
    pincode: '742182',
    alternative_pincode: '742166',
    branch_post_office: 'Choa B.O',
    sub_post_office: 'Choa / Hariharpara Zone',
    gram_panchayat: 'Choa G.P',
    zone: 'special',
    note_bn: '742182 / 742166 উভয় পিনকোড কার্যকর'
  },
  {
    id: 'north_pathanpara',
    name_bn: 'উত্তর পাঠানপাড়া',
    name_en: 'North Pathanpara',
    pincode: '742182',
    alternative_pincode: '742166',
    branch_post_office: 'Choa B.O',
    sub_post_office: 'Choa / Hariharpara Zone',
    gram_panchayat: 'Choa G.P',
    zone: 'special',
    note_bn: '742182 / 742166 উভয় পিনকোড কার্যকর'
  },
  {
    id: 'chhatimtala',
    name_bn: 'ছাতিমতলা',
    name_en: 'Chhatimtala',
    pincode: '742182',
    alternative_pincode: '742166',
    branch_post_office: 'Choa B.O',
    sub_post_office: 'Choa / Hariharpara Zone',
    gram_panchayat: 'Choa G.P',
    zone: 'special',
    note_bn: '742182 / 742166 উভয় পিনকোড কার্যকর'
  },
  {
    id: 'biharia',
    name_bn: 'বিহারিয়া',
    name_en: 'Biharia / Beharia',
    pincode: '742175',
    branch_post_office: 'Beharia B.O',
    sub_post_office: 'Sabdarnagar S.O',
    gram_panchayat: 'Beharia G.P',
    zone: 'special'
  },
  {
    id: 'arazi_biharia',
    name_bn: 'আরাজি বিহারিয়া',
    name_en: 'Arazi Biharia',
    pincode: '742175',
    branch_post_office: 'Beharia B.O',
    sub_post_office: 'Sabdarnagar S.O',
    gram_panchayat: 'Beharia G.P',
    zone: 'special'
  },
  {
    id: 'baruipara',
    name_bn: 'বারুইপাড়া (পূর্ব প্রান্ত)',
    name_en: 'Baruipara (East Zone)',
    pincode: '742165',
    alternative_pincode: '742166',
    branch_post_office: 'Baruipara Delivery Zone',
    sub_post_office: 'Khidirpur Zone',
    gram_panchayat: 'Khidirpur G.P',
    zone: 'special',
    note_bn: 'বিকল্পে 742166 কার্যকর'
  },

  // ================= ২. মূল হরিহরপাড়া অঞ্চল (PIN: 742166 — Hariharpara S.O) =================
  {
    id: 'hariharpara',
    name_bn: 'হরিহরপাড়া সদর',
    name_en: 'Hariharpara Town / Main Road',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'lochanmati',
    name_bn: 'লোচনমাটি',
    name_en: 'Lochanmati',
    pincode: '742166',
    branch_post_office: 'Lochanmati Dangapara B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'dangapara',
    name_bn: 'ডাঙ্গাপাড়া',
    name_en: 'Dangapara',
    pincode: '742166',
    branch_post_office: 'Lochanmati Dangapara B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'protappur',
    name_bn: 'প্রতাপপুর',
    name_en: 'Protappur',
    pincode: '742166',
    branch_post_office: 'Protappur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Humaipur G.P',
    zone: 'main'
  },
  {
    id: 'jhanjha',
    name_bn: 'ঝাঁঝা',
    name_en: 'Jhanjha',
    pincode: '742166',
    branch_post_office: 'Protappur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Humaipur G.P',
    zone: 'main'
  },
  {
    id: 'gaznipur',
    name_bn: 'গজনীপুর',
    name_en: 'Gaznipur',
    pincode: '742166',
    branch_post_office: 'Gaznipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main'
  },
  {
    id: 'mamudpur',
    name_bn: 'মাহমুদপুর',
    name_en: 'Mamudpur',
    pincode: '742166',
    branch_post_office: 'Gaznipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main'
  },
  {
    id: 'nazirpur',
    name_bn: 'নজিরপুর',
    name_en: 'Nazirpur',
    pincode: '742166',
    branch_post_office: 'Gaznipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main'
  },
  {
    id: 'nutanpara',
    name_bn: 'নতুনপাড়া',
    name_en: 'Nutanpara',
    pincode: '742166',
    branch_post_office: 'Gaznipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main'
  },
  {
    id: 'rukunpur',
    name_bn: 'রুকুনপুর',
    name_en: 'Rukunpur',
    pincode: '742166',
    branch_post_office: 'Rukunpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Rukunpur G.P',
    zone: 'main'
  },
  {
    id: 'char_sibnagar',
    name_bn: 'চর শিবনগর',
    name_en: 'Char Sibnagar',
    pincode: '742166',
    branch_post_office: 'Rukunpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Rukunpur G.P',
    zone: 'main'
  },
  {
    id: 'sripur',
    name_bn: 'শ্রীপুর',
    name_en: 'Sripur',
    pincode: '742166',
    branch_post_office: 'Sripur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Malopara G.P',
    zone: 'main'
  },
  {
    id: 'swaruppur',
    name_bn: 'স্বরূপপুর',
    name_en: 'Swaruppur',
    pincode: '742166',
    branch_post_office: 'Swaruppur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Swaruppur G.P',
    zone: 'main'
  },
  {
    id: 'sundalpur',
    name_bn: 'সুন্দলপুর',
    name_en: 'Sundalpur',
    pincode: '742166',
    branch_post_office: 'Swaruppur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Swaruppur G.P',
    zone: 'main'
  },
  {
    id: 'sahazadpur',
    name_bn: 'শাহজাদপুর',
    name_en: 'Sahazadpur',
    pincode: '742166',
    branch_post_office: 'Sahazadpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'umrapur',
    name_bn: 'উমরাপুর',
    name_en: 'Umrapur',
    pincode: '742166',
    branch_post_office: 'Sahazadpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },

  // Page 2 Villages:
  {
    id: 'sankarpur',
    name_bn: 'শঙ্করপুর',
    name_en: 'Sankarpur',
    pincode: '742166',
    branch_post_office: 'Sankarpur Dharampur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'dharampur',
    name_bn: 'ধরমপুর',
    name_en: 'Dharampur',
    pincode: '742166',
    branch_post_office: 'Sankarpur Dharampur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'dharampur_ramna',
    name_bn: 'ধরমপুর রমনা',
    name_en: 'Dharampur Ramna',
    pincode: '742166',
    branch_post_office: 'Sankarpur Dharampur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'jamira',
    name_bn: 'জমিরা',
    name_en: 'Jamira',
    pincode: '742166',
    branch_post_office: 'Sankarpur Dharampur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'jamlabad',
    name_bn: 'জামলাবাদ',
    name_en: 'Jamlabad',
    pincode: '742166',
    branch_post_office: 'Sankarpur Dharampur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'kumipur_patharghata',
    name_bn: 'কুমিপুর পাথরঘাটা',
    name_en: 'Kumipur Patharghata',
    pincode: '742166',
    branch_post_office: 'Sankarpur Dharampur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'tartipur',
    name_bn: 'তর্তিপর',
    name_en: 'Tartipur',
    pincode: '742166',
    branch_post_office: 'Tartipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'khamarbati',
    name_bn: 'খামারবাটি',
    name_en: 'Khamarbati',
    pincode: '742166',
    branch_post_office: 'Tartipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'siddhi_nandi',
    name_bn: 'সিদ্ধি নন্দী',
    name_en: 'Siddhi Nandi',
    pincode: '742166',
    branch_post_office: 'Tartipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'kaludiar',
    name_bn: 'কালুডিয়ার',
    name_en: 'Kaludiar',
    pincode: '742166',
    branch_post_office: 'Tartipur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'ramkrishnapur',
    name_bn: 'রামকৃষ্ণপুর',
    name_en: 'Ramkrishnapur',
    pincode: '742166',
    branch_post_office: 'Ramkrishnapur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'tekona',
    name_bn: 'টেকোনা',
    name_en: 'Tekona',
    pincode: '742166',
    branch_post_office: 'Ramkrishnapur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'char_tekona',
    name_bn: 'চর টেকোনা',
    name_en: 'Char Tekona',
    pincode: '742166',
    branch_post_office: 'Ramkrishnapur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'padmanabhpur',
    name_bn: 'পদ্মনাভপুর',
    name_en: 'Padmanabhpur',
    pincode: '742166',
    branch_post_office: 'Padmanavpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Malopara G.P',
    zone: 'main'
  },
  {
    id: 'joykrishnapur',
    name_bn: 'জয়কৃষ্ণপুর',
    name_en: 'Joykrishnapur',
    pincode: '742166',
    branch_post_office: 'Padmanavpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Malopara G.P',
    zone: 'main'
  },
  {
    id: 'char_malopara',
    name_bn: 'চর মালোপাড়া',
    name_en: 'Char Malopara',
    pincode: '742166',
    branch_post_office: 'Padmanavpur B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Malopara G.P',
    zone: 'main'
  },
  {
    id: 'sarbangapur',
    name_bn: 'সর্বাঙ্গপুর',
    name_en: 'Sarbangapur',
    pincode: '742166',
    branch_post_office: 'Lochanmati Dangapara B.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'dasturpara',
    name_bn: 'দস্তুরপাড়া',
    name_en: 'Dasturpara',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'khalshi',
    name_bn: 'খলসী',
    name_en: 'Khalshi',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'jitarpur',
    name_bn: 'জিতাড়পুর',
    name_en: 'Jitarpur',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'janarddanpur',
    name_bn: 'জনার্দনপুর',
    name_en: 'Janarddanpur',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Dharampur G.P',
    zone: 'main'
  },
  {
    id: 'nasipur',
    name_bn: 'নাসিপুর',
    name_en: 'Nasipur',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Hariharpara G.P',
    zone: 'main'
  },
  {
    id: 'kismat_imadpur',
    name_bn: 'কিসমত ইমাদপুর',
    name_en: 'Kismat Imadpur',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Khidirpur G.P',
    zone: 'main'
  },
  {
    id: 'bil_bhandardaha',
    name_bn: 'বিল ভাণ্ডারদহ',
    name_en: 'Bil Bhandardaha',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Humaipur G.P',
    zone: 'main'
  },
  {
    id: 'bainpur',
    name_bn: 'বাইণপুর',
    name_en: 'Bainpur',
    pincode: '742166',
    branch_post_office: 'Hariharpara S.O',
    sub_post_office: 'Hariharpara S.O',
    gram_panchayat: 'Khidirpur G.P',
    zone: 'main'
  }
];

// Mark all Hariharpara villages with block: 'Hariharpara'
HARIHARPARA_VILLAGES.forEach(v => {
  if (!v.block) v.block = 'Hariharpara';
});

// ================= ৩. নওদা ব্লক (Nowda Block Complete Directory) =================
// সূত্র: Nowda Community Development Block, Murshidabad (West Bengal)
// প্রধান সাব পোস্ট অফিস: Amtala S.O (742121) ও Patkabari S.O (742122)
export const NOWDA_VILLAGES: HariharparaVillage[] = [
  // ================= ৩.১ আমতলা ও নওদা জোন (PIN: 742121 — Amtala S.O / Nowda B.O) =================
  {
    id: 'amtala_bazar',
    name_bn: 'আমতলা বাজার',
    name_en: 'Amtala Bazar',
    pincode: '742121',
    branch_post_office: 'Amtala S.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Nowda G.P',
    zone: 'main',
    block: 'Nowda',
    note_bn: 'নওদা ব্লক সদর ও হাসপাতাল মোড়'
  },
  {
    id: 'nowda_village',
    name_bn: 'নওদা মধ্যপাড়া',
    name_en: 'Nowda Madhyapara',
    pincode: '742121',
    branch_post_office: 'Nowda B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Nowda G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'gangarampur_nowda',
    name_bn: 'গঙ্গারামপুর',
    name_en: 'Gangarampur (Nowda)',
    pincode: '742121',
    branch_post_office: 'Nowda B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Nowda G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'rampara_nowda',
    name_bn: 'রামপাড়া',
    name_en: 'Rampara (Nowda)',
    pincode: '742121',
    branch_post_office: 'Nowda B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Nowda G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'sibnagar_nowda',
    name_bn: 'শিবনগর',
    name_en: 'Sibnagar (Nowda)',
    pincode: '742121',
    branch_post_office: 'Nowda B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Nowda G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'kamarpara_nowda',
    name_bn: 'কামারপাড়া',
    name_en: 'Kamarpara (Nowda)',
    pincode: '742121',
    branch_post_office: 'Nowda B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Nowda G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.২ কেদারচাঁদপুর-১ ও ২ জোন (PIN: 742121 — Kedarchandpur B.O) =================
  {
    id: 'kedarchandpur_village',
    name_bn: 'কেদারচাঁদপুর',
    name_en: 'Kedarchandpur',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-1 G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'amdanga_nowda',
    name_bn: 'আমডাঙ্গা',
    name_en: 'Amdanga',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-1 G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'uttarpara_kedar',
    name_bn: 'উত্তরপাড়া',
    name_en: 'Uttarpara (Kedarchandpur)',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-1 G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'radhanagar_nowda',
    name_bn: 'রাধানগর',
    name_en: 'Radhanagar',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-1 G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'diyar_chandpur',
    name_bn: 'দিয়ার চাঁদপুর',
    name_en: 'Diyar Chandpur',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-2 G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'balia_nowda',
    name_bn: 'বালিয়া',
    name_en: 'Balia (Nowda)',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-2 G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'char_kedarchandpur',
    name_bn: 'চর কেদারচাঁদপুর',
    name_en: 'Char Kedarchandpur',
    pincode: '742121',
    branch_post_office: 'Kedarchandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Kedarchandpur-2 G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৩ চাঁদপুর জোন (PIN: 742121 — Chandpur B.O) =================
  {
    id: 'chandpur_village',
    name_bn: 'চাঁদপুর',
    name_en: 'Chandpur',
    pincode: '742121',
    branch_post_office: 'Chandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Chandpur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'bishnupur_nowda',
    name_bn: 'বিষ্ণুপুর',
    name_en: 'Bishnupur',
    pincode: '742121',
    branch_post_office: 'Chandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Chandpur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'mahishura_nowda',
    name_bn: 'মহিষুরা',
    name_en: 'Mahishura',
    pincode: '742121',
    branch_post_office: 'Chandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Chandpur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'shikaripur_nowda',
    name_bn: 'শিকারীপুর',
    name_en: 'Shikaripur',
    pincode: '742121',
    branch_post_office: 'Chandpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Chandpur G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৪ বালি জোন (PIN: 742121 — Bali B.O) =================
  {
    id: 'bali_village',
    name_bn: 'বালি',
    name_en: 'Bali',
    pincode: '742121',
    branch_post_office: 'Bali B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Bali G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'belia_nowda',
    name_bn: 'বেলিয়া',
    name_en: 'Belia',
    pincode: '742121',
    branch_post_office: 'Bali B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Bali G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'chak_bali_nowda',
    name_bn: 'চক বালি',
    name_en: 'Chak Bali',
    pincode: '742121',
    branch_post_office: 'Bali B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Bali G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'kanchan_nagar_nowda',
    name_bn: 'কাঞ্চননগর',
    name_en: 'Kanchan-nagar',
    pincode: '742121',
    branch_post_office: 'Bali B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Bali G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৫ রায়পুর জোন (PIN: 742121 — Raipur B.O) =================
  {
    id: 'raipur_village',
    name_bn: 'রায়পুর',
    name_en: 'Raipur',
    pincode: '742121',
    branch_post_office: 'Raipur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'gobindapur_nowda',
    name_bn: 'গোবিন্দপুর',
    name_en: 'Gobindapur',
    pincode: '742121',
    branch_post_office: 'Raipur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'baghmara_nowda',
    name_bn: 'বাঘমারা',
    name_en: 'Baghmara',
    pincode: '742121',
    branch_post_office: 'Raipur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'sankarpur_nowda',
    name_bn: 'শঙ্করপুর',
    name_en: 'Sankarpur (Nowda)',
    pincode: '742121',
    branch_post_office: 'Raipur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Raipur G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৬ মধুবনা জোন (PIN: 742121 — Madhubana B.O) =================
  {
    id: 'madhubana_village',
    name_bn: 'মধুবনা',
    name_en: 'Madhubana',
    pincode: '742121',
    branch_post_office: 'Madhubana B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Madhubana G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'chak_madhubana',
    name_bn: 'চক মধুবনা',
    name_en: 'Chak Madhubana',
    pincode: '742121',
    branch_post_office: 'Madhubana B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Madhubana G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'sonadanga_nowda',
    name_bn: 'সোনাডাঙা',
    name_en: 'Sonadanga',
    pincode: '742121',
    branch_post_office: 'Madhubana B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Madhubana G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'joykrishnapur_nowda',
    name_bn: 'জয়কৃষ্ণপুর',
    name_en: 'Joykrishnapur (Nowda)',
    pincode: '742121',
    branch_post_office: 'Madhubana B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Madhubana G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৭ ত্রিমোহিনী জোন (PIN: 742121 — Trimohini B.O) =================
  {
    id: 'trimohini_village',
    name_bn: 'ত্রিমোহিনী',
    name_en: 'Trimohini',
    pincode: '742121',
    branch_post_office: 'Trimohini B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Trimohini G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'ramchandrapur_nowda',
    name_bn: 'রামচন্দ্রপুর',
    name_en: 'Ramchandrapur',
    pincode: '742121',
    branch_post_office: 'Trimohini B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Trimohini G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'raghunathpur_nowda',
    name_bn: 'রঘুনাথপুর',
    name_en: 'Raghunathpur (Nowda)',
    pincode: '742121',
    branch_post_office: 'Trimohini B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Trimohini G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'nutanpara_nowda',
    name_bn: 'নতুনপাড়া',
    name_en: 'Nutanpara (Nowda)',
    pincode: '742121',
    branch_post_office: 'Trimohini B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Trimohini G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৮ সারঙ্গপুর জোন (PIN: 742121 — Sarungpur B.O) =================
  {
    id: 'sarungpur_village',
    name_bn: 'সারঙ্গপুর',
    name_en: 'Sarungpur',
    pincode: '742121',
    branch_post_office: 'Sarungpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Sarungpur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'gangadharpara_nowda',
    name_bn: 'গঙ্গাধরপাড়া',
    name_en: 'Gangadharpara',
    pincode: '742121',
    branch_post_office: 'Sarungpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Sarungpur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'krishnanagarpara_nowda',
    name_bn: 'কৃষ্ণনগরপাড়া',
    name_en: 'Krishnanagarpara',
    pincode: '742121',
    branch_post_office: 'Sarungpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Sarungpur G.P',
    zone: 'main',
    block: 'Nowda'
  },
  {
    id: 'haridaspur_nowda',
    name_bn: 'হরিদাসপুর',
    name_en: 'Haridaspur',
    pincode: '742121',
    branch_post_office: 'Sarungpur B.O',
    sub_post_office: 'Amtala S.O',
    gram_panchayat: 'Sarungpur G.P',
    zone: 'main',
    block: 'Nowda'
  },

  // ================= ৩.৯ পাটকাবাড়ী ও গোপালনগর জোন (PIN: 742122 — Patkabari S.O) =================
  {
    id: 'patkabari_village',
    name_bn: 'পাটকাবাড়ী',
    name_en: 'Patkabari',
    pincode: '742122',
    branch_post_office: 'Patkabari S.O',
    sub_post_office: 'Patkabari S.O',
    gram_panchayat: 'Patkabari G.P',
    zone: 'special',
    block: 'Nowda',
    note_bn: 'নওদা পূর্বাঞ্চল, থানা এলাকা ও প্রধান বাজার'
  },
  {
    id: 'debipur_nowda',
    name_bn: 'দেবীপুর',
    name_en: 'Debipur (Nowda)',
    pincode: '742122',
    branch_post_office: 'Patkabari S.O',
    sub_post_office: 'Patkabari S.O',
    gram_panchayat: 'Patkabari G.P',
    zone: 'special',
    block: 'Nowda'
  },
  {
    id: 'chak_patkabari',
    name_bn: 'চক পাটকাবাড়ী',
    name_en: 'Chak Patkabari',
    pincode: '742122',
    branch_post_office: 'Gopalnagar B.O',
    sub_post_office: 'Patkabari S.O',
    gram_panchayat: 'Patkabari G.P',
    zone: 'special',
    block: 'Nowda'
  },
  {
    id: 'gopalnagar_nowda',
    name_bn: 'গোপালনগর',
    name_en: 'Gopalnagar',
    pincode: '742122',
    branch_post_office: 'Gopalnagar B.O',
    sub_post_office: 'Patkabari S.O',
    gram_panchayat: 'Patkabari G.P',
    zone: 'special',
    block: 'Nowda'
  },
  {
    id: 'durgapur_nowda',
    name_bn: 'দুর্গাপুর',
    name_en: 'Durgapur (Nowda)',
    pincode: '742122',
    branch_post_office: 'Gopalnagar B.O',
    sub_post_office: 'Patkabari S.O',
    gram_panchayat: 'Patkabari G.P',
    zone: 'special',
    block: 'Nowda'
  }
];

export const ALL_PRESET_VILLAGES: HariharparaVillage[] = [
  ...HARIHARPARA_VILLAGES,
  ...NOWDA_VILLAGES
];

export const DEFAULT_VILLAGE: HariharparaVillage = HARIHARPARA_VILLAGES.find(v => v.id === 'hariharpara') || HARIHARPARA_VILLAGES[0];

export const CUSTOM_VILLAGES_STORAGE_KEY = 'thyrocare_custom_villages_v1';

export const getCustomVillages = (): HariharparaVillage[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_VILLAGES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to load custom villages:', e);
    return [];
  }
};

export const saveCustomVillage = (data: {
  name: string;
  pincode: string;
  landmark?: string;
  gram_panchayat?: string;
}): HariharparaVillage => {
  const customList = getCustomVillages();
  const cleanPin = (data.pincode || '742166').trim();
  const cleanName = data.name.trim();

  // Check if already exists in custom
  const existing = customList.find(
    v => v.name_bn.toLowerCase() === cleanName.toLowerCase() || 
         v.name_en.toLowerCase() === cleanName.toLowerCase()
  );

  if (existing) {
    return existing;
  }

  const isNowda = cleanPin === '742121' || cleanPin === '742122';
  const id = `custom_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const newVillage: HariharparaVillage = {
    id,
    name_bn: cleanName,
    name_en: cleanName,
    pincode: cleanPin,
    branch_post_office: data.landmark ? `${data.landmark}` : (cleanPin === '742121' ? 'Amtala S.O' : cleanPin === '742122' ? 'Patkabari S.O' : cleanPin === '742182' ? 'Choa B.O' : cleanPin === '742175' ? 'Beharia B.O' : 'Hariharpara S.O'),
    sub_post_office: cleanPin === '742121' ? 'Amtala S.O' : cleanPin === '742122' ? 'Patkabari S.O' : cleanPin === '742182' ? 'Choa S.O' : 'Hariharpara S.O',
    gram_panchayat: data.gram_panchayat || (isNowda ? 'Nowda Area' : 'Hariharpara Area'),
    zone: cleanPin === '742166' || cleanPin === '742121' ? 'main' : 'special',
    block: isNowda ? 'Nowda' : 'Hariharpara',
    note_bn: 'ব্যবহারকারীর সংরক্ষিত এলাকা',
    is_custom: true,
    created_at: new Date().toISOString()
  };

  const updated = [newVillage, ...customList];
  try {
    localStorage.setItem(CUSTOM_VILLAGES_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save custom village:', e);
  }

  return newVillage;
};

export const deleteCustomVillage = (id: string): void => {
  try {
    const customList = getCustomVillages();
    const filtered = customList.filter(v => v.id !== id);
    localStorage.setItem(CUSTOM_VILLAGES_STORAGE_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error('Failed to delete custom village:', e);
  }
};

export const getAllVillages = (): HariharparaVillage[] => {
  const custom = getCustomVillages();
  return [...custom, ...ALL_PRESET_VILLAGES];
};

export const getVillageById = (id: string): HariharparaVillage => {
  const custom = getCustomVillages();
  const foundCustom = custom.find(v => v.id === id);
  if (foundCustom) return foundCustom;
  return ALL_PRESET_VILLAGES.find(v => v.id === id) || DEFAULT_VILLAGE;
};

export const extractPincodeAndArea = (text: string): { pincode?: string; area?: string } => {
  if (!text) return {};
  // Find 6 digit Indian PIN code (preferring 742166, 742182, 742175, 742165, 742121, 742122 or \d{6})
  const pinMatch = text.match(/\b(742166|742182|742175|742165|742121|742122|742\d{3}|\d{6})\b/);
  const pincode = pinMatch ? pinMatch[1] : undefined;

  // Try to find matching known village in text
  const cleanLower = text.toLowerCase();
  const all = getAllVillages();
  const matched = all.find(
    v => cleanLower.includes(v.name_bn.toLowerCase()) || 
         cleanLower.includes(v.name_en.toLowerCase())
  );

  return {
    pincode: pincode || matched?.pincode,
    area: matched ? matched.name_bn : undefined
  };
};

export const formatVillageLabel = (village: HariharparaVillage, language: 'en' | 'bn' = 'bn'): string => {
  const name = language === 'bn' ? village.name_bn : village.name_en;
  return `${village.pincode}, ${name}`;
};

export const formatVillageFullAddress = (village: HariharparaVillage, language: 'en' | 'bn' = 'bn'): string => {
  const blockName = village.block === 'Nowda' 
    ? (language === 'bn' ? 'নওদা ব্লক' : 'Nowda Block')
    : (language === 'bn' ? 'হরিহরপাড়া ব্লক' : 'Hariharpara Block');

  if (language === 'bn') {
    return `গ্রাম: ${village.name_bn}, ডাকঘর: ${village.branch_post_office}, জিপি: ${village.gram_panchayat}, ${blockName}, পিন: ${village.pincode}`;
  }
  return `Vill: ${village.name_en}, P.O: ${village.branch_post_office}, G.P: ${village.gram_panchayat}, ${blockName}, PIN: ${village.pincode}`;
};



