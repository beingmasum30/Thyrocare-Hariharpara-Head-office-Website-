import { Product, ProductCategory } from '../types';

interface RawPdfRateItem {
  code: string;
  name: string;
  mrp: number;
  category: ProductCategory;
  name_bn?: string;
  description?: string;
  description_bn?: string;
  fasting?: boolean;
  sample?: string;
  tat?: string;
  params?: number;
  included?: string[];
  popular?: boolean;
}

// Complete Official Thyrocare Rate List Catalogue (1,516 items: 285 Packages, 87 Profiles, 594 Tests, 550 Outlab Tests)
const rawPdfCatalogue: RawPdfRateItem[] = [
  {
    "code": "AA1.1WU",
    "name": "AAROGYAM 1.1 WITH UTSH",
    "mrp": 1885,
    "category": "package",
    "name_bn": "আরোগ্যম ১.১ (উইথ আল্ট্রা-সেনসিটিভ TSH)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-36 Hours",
    "params": 61,
    "popular": true,
    "description": "Comprehensive preventive health checkup covering 61 parameters including Thyroid (UTSH), Lipid, Liver, Kidney, Iron Deficiency, and Cardiac Risk Markers.",
    "description_bn": "৬১টি গুরুত্বপূর্ণ প্যারামিটার যুক্ত সম্পূর্ণ স্বাস্থ্য পরীক্ষা: থাইরয়েড (UTSH), লিভার, কিডনি, লিপিড ও আয়রন প্রোফাইল।",
    "included": [
      "Thyroid Profile (T3, T4, UTSH)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Profile",
      "Iron Deficiency Profile",
      "Cardiac Risk Markers"
    ]
  },
  {
    "code": "AA1.2WU",
    "name": "AAROGYAM 1.2 WITH UTSH",
    "mrp": 2395,
    "category": "package",
    "name_bn": "আরোগ্যম ১.২ (উইথ UTSH ও ডায়াবেটিস প্রোফাইল)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-36 Hours",
    "params": 73,
    "popular": true,
    "description": "Advanced full body checkup covering 73 parameters including HbA1c, Complete Hemogram, Thyroid (UTSH), Liver, Kidney, Lipid, and Toxic Elements.",
    "description_bn": "৭৩টি প্যারামিটার: HbA1c ডায়াবেটিস, সিবিসি, লিভার, কিডনি, থাইরয়েড ও টক্সিক এলিমেন্ট।",
    "included": [
      "HbA1c & Blood Glucose",
      "Complete Hemogram (CBC)",
      "Thyroid Profile with UTSH",
      "Lipid & Cardiac Risk Markers",
      "Liver & Kidney Function"
    ]
  },
  {
    "code": "AA1.3WU",
    "name": "AAROGYAM 1.3 WITH UTSH",
    "mrp": 3700,
    "category": "package",
    "name_bn": "আরোগ্যম ১.৩ (উইথ ভিটামিন ডি, বি১২ ও UTSH)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-36 Hours",
    "params": 98,
    "popular": true,
    "description": "Bestselling master health package with 98 parameters including Vitamin D, Vitamin B12, HbA1c, CBC, Thyroid (UTSH), Liver, Kidney, Lipid, and Iron.",
    "description_bn": "৯৮টি প্যারামিটার সহ সবচেয়ে জনপ্রিয় ফুল বডি চেকআপ: ভিটামিন ডি, বি১২, ডায়াবেটিস, থাইরয়েড, লিভার ও কিডনি।",
    "included": [
      "25-OH Vitamin D Total",
      "Vitamin B12",
      "HbA1c & Average Blood Glucose",
      "Thyroid Profile (T3, T4, UTSH)",
      "Liver & Kidney Profile",
      "Lipid & Cardiac Risk Markers",
      "Complete Hemogram (28 params)"
    ]
  },
  {
    "code": "AA1.4WU",
    "name": "AAROGYAM 1.4 WITH UTSH",
    "mrp": 4280,
    "category": "package",
    "name_bn": "আরোগ্যম ১.৪ (উইথ UTSH ও হরমোন প্রোফাইল)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-48 Hours",
    "params": 104,
    "popular": true,
    "description": "Executive master health checkup with 104 parameters including Testosterone, Insulin Fasting, Fructosamine, Vitamin D, B12, HbA1c, and Organ Profiles.",
    "description_bn": "১০৪টি প্যারামিটার সহ এক্সিকিউটিভ মাস্টার হেলথ চেকআপ (ভিটামিন ডি, বি১২, ইনসুলিন, টেস্টোস্টেরন ও সম্পূর্ণ বডি প্রোফাইল)।",
    "included": [
      "Vitamin D & Vitamin B12",
      "Testosterone & Fasting Insulin",
      "HbA1c & Fructosamine",
      "Amylase & Lipase (Pancreatic)",
      "Complete Hemogram, Liver, Kidney, Lipid, Thyroid (UTSH)"
    ]
  },
  {
    "code": "AA1.5WU",
    "name": "AAROGYAM 1.5 WITH UTSH",
    "mrp": 4790,
    "category": "package",
    "name_bn": "আরোগ্যম ১.৫ (উইথ আর্থ্রাইটিস ও UTSH)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-48 Hours",
    "params": 106,
    "popular": false,
    "description": "Complete wellness checkup with 106 parameters including Anti-CCP, ANA, Rheumatoid Factor, Vitamin D, B12, HbA1c, and major organ profiles.",
    "description_bn": "১০৬টি প্যারামিটার সহ সম্পূর্ণ বডি চেকআপ ও আর্থ্রাইটিস স্ক্রিনিং।"
  },
  {
    "code": "AA1.6WU",
    "name": "AAROGYAM 1.6 WITH UTSH",
    "mrp": 5300,
    "category": "package",
    "name_bn": "আরোগ্যম ১.৬ (উইথ UTSH ও ভিটামিন প্রোফাইল)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-48 Hours",
    "params": 110,
    "popular": false,
    "description": "Comprehensive 110-parameter executive wellness checkup.",
    "description_bn": "১১০টি প্যারামিটার সহ অ্যাডভান্সড এক্সিকিউটিভ হেলথ চেকআপ।"
  },
  {
    "code": "AA1.7WU",
    "name": "AAROGYAM 1.7 WITH UTSH",
    "mrp": 6415,
    "category": "package",
    "name_bn": "আরোগ্যম ১.৭ (উইথ UTSH)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-48 Hours",
    "params": 132,
    "popular": false
  },
  {
    "code": "AA1.8WU",
    "name": "AAROGYAM 1.8 WITH UTSH",
    "mrp": 7420,
    "category": "package",
    "name_bn": "আরোগ্যম ১.৮ (উইথ UTSH)",
    "fasting": true,
    "sample": "Blood & Serum",
    "tat": "24-48 Hours",
    "params": 139,
    "popular": false
  },
  {
    "code": "AANFA",
    "name": "AAROGYAM 24X7 (NON FASTING) - ADVANCED",
    "mrp": 6055,
    "category": "package"
  },
  {
    "code": "AANFB",
    "name": "AAROGYAM 24X7 (NON FASTING) - BASIC",
    "mrp": 3645,
    "category": "package"
  },
  {
    "code": "AANFM",
    "name": "AAROGYAM 24X7 (NON FASTING) - MINI",
    "mrp": 2230,
    "category": "package"
  },
  {
    "code": "AARAPLS",
    "name": "AAROGYAM A PLUS - PACKAGE",
    "mrp": 1299,
    "category": "package",
    "name_bn": "আরোগ্যম এ প্লাস প্যাকেজ (Aarogyam A Plus)",
    "fasting": true,
    "params": 65,
    "popular": true
  },
  {
    "code": "AAPPWU",
    "name": "AAROGYAM A PLUS PROFILE WITH UTSH",
    "mrp": 2025,
    "category": "package"
  },
  {
    "code": "AARAPROP",
    "name": "AAROGYAM A PRO - PACKAGE",
    "mrp": 999,
    "category": "package",
    "name_bn": "আরোগ্যম এ প্রো প্যাকেজ (Aarogyam A Pro)",
    "fasting": true,
    "params": 64,
    "popular": true
  },
  {
    "code": "AA-APWU",
    "name": "AAROGYAM A PRO WITH UTSH",
    "mrp": 1760,
    "category": "package"
  },
  {
    "code": "AA-AWU",
    "name": "AAROGYAM A WITH UTSH",
    "mrp": 1695,
    "category": "package"
  },
  {
    "code": "AARBPLUS",
    "name": "AAROGYAM B PLUS - PACKAGE",
    "mrp": 2299,
    "category": "package",
    "name_bn": "আরোগ্যম বি প্লাস প্যাকেজ (Aarogyam B Plus)",
    "fasting": true,
    "params": 68,
    "popular": true
  },
  {
    "code": "AABPPWU",
    "name": "AAROGYAM B PLUS PROFILE WITH UTSH",
    "mrp": 2350,
    "category": "package"
  },
  {
    "code": "AARBPRP",
    "name": "AAROGYAM B PRO - PACKAGE",
    "mrp": 1999,
    "category": "package"
  },
  {
    "code": "AA-BPWU",
    "name": "AAROGYAM B PRO WITH UTSH",
    "mrp": 2090,
    "category": "package"
  },
  {
    "code": "AA-BWU",
    "name": "AAROGYAM B WITH UTSH",
    "mrp": 1990,
    "category": "package"
  },
  {
    "code": "AARCPLUS",
    "name": "AAROGYAM C PLUS PACKAGE",
    "mrp": 3299,
    "category": "package",
    "name_bn": "আরোগ্যম সি প্লাস প্যাকেজ (Aarogyam C Plus)",
    "fasting": true,
    "params": 88,
    "popular": true
  },
  {
    "code": "AACPPWU",
    "name": "AAROGYAM C PLUS PROFILE WITH UTSH",
    "mrp": 3265,
    "category": "package"
  },
  {
    "code": "AARCPLU",
    "name": "AAROGYAM C PLUS WITH FT3 FT4 PACKAGE",
    "mrp": 3699,
    "category": "package"
  },
  {
    "code": "ACPICAWU",
    "name": "AAROGYAM C PRO INCLUDING CRM ADVANCED WITH UTSH",
    "mrp": 3845,
    "category": "package"
  },
  {
    "code": "ACPICWU",
    "name": "AAROGYAM C PRO INCLUDING CRM WITH UTSH",
    "mrp": 3740,
    "category": "package"
  },
  {
    "code": "AARCPR",
    "name": "AAROGYAM C PRO PACKAGE",
    "mrp": 2999,
    "category": "package"
  },
  {
    "code": "AARCPACK",
    "name": "AAROGYAM C PRO WITH FT3 FT4 PACKAGE",
    "mrp": 3399,
    "category": "package"
  },
  {
    "code": "ACPHAR",
    "name": "AAROGYAM C PRO WITH HEART ATTACK RISK",
    "mrp": 3420,
    "category": "package"
  },
  {
    "code": "AARCHEAR",
    "name": "AAROGYAM C PRO WITH HEART ATTACK RISK PACKAGE",
    "mrp": 3999,
    "category": "package"
  },
  {
    "code": "AA-CPWU",
    "name": "AAROGYAM C PRO WITH UTSH",
    "mrp": 2995,
    "category": "package"
  },
  {
    "code": "AA-CWU",
    "name": "AAROGYAM C WITH UTSH",
    "mrp": 2999,
    "category": "package"
  },
  {
    "code": "AACP1",
    "name": "AAROGYAM CAMP PROFILE 1",
    "mrp": 2530,
    "category": "package"
  },
  {
    "code": "AACP2",
    "name": "AAROGYAM CAMP PROFILE 2",
    "mrp": 3740,
    "category": "package"
  },
  {
    "code": "ACP3",
    "name": "AAROGYAM CAMP PROFILE 3",
    "mrp": 5280,
    "category": "package"
  },
  {
    "code": "AACOM1",
    "name": "AAROGYAM COMPANION 1",
    "mrp": 2455,
    "category": "package"
  },
  {
    "code": "AACOM2",
    "name": "AAROGYAM COMPANION 2",
    "mrp": 2455,
    "category": "package"
  },
  {
    "code": "AACPKWU",
    "name": "AAROGYAM CORP PACKAGE WITH UTSH",
    "mrp": 1920,
    "category": "package"
  },
  {
    "code": "AARDPL",
    "name": "AAROGYAM D PLUS PACKAGE",
    "mrp": 4299,
    "category": "package"
  },
  {
    "code": "AADPPWU",
    "name": "AAROGYAM D PLUS PROFILE WITH UTSH",
    "mrp": 5610,
    "category": "package"
  },
  {
    "code": "AARDPRO",
    "name": "AAROGYAM D PRO PACKAGE",
    "mrp": 3999,
    "category": "package"
  },
  {
    "code": "AADWU",
    "name": "AAROGYAM D PRO WITH UTSH",
    "mrp": 4499,
    "category": "package"
  },
  {
    "code": "AAREPLUS",
    "name": "AAROGYAM E PLUS PACKAGE",
    "mrp": 5799,
    "category": "package"
  },
  {
    "code": "AAEPWU",
    "name": "AAROGYAM E PLUS PROFILE WITH UTSH",
    "mrp": 6735,
    "category": "package"
  },
  {
    "code": "AAREPR",
    "name": "AAROGYAM E PRO PACKAGE",
    "mrp": 5499,
    "category": "package"
  },
  {
    "code": "AAEWU",
    "name": "AAROGYAM E PRO WITH UTSH",
    "mrp": 5985,
    "category": "package"
  },
  {
    "code": "AARFPLU",
    "name": "AAROGYAM F PLUS PACKAGE",
    "mrp": 7299,
    "category": "package"
  },
  {
    "code": "AAFPWU",
    "name": "AAROGYAM F PLUS PROFILE WITH UTSH",
    "mrp": 7805,
    "category": "package"
  },
  {
    "code": "AARFPRO",
    "name": "AAROGYAM F PRO PACKAGE",
    "mrp": 6999,
    "category": "package"
  },
  {
    "code": "AAFWU",
    "name": "AAROGYAM F PRO WITH UTSH",
    "mrp": 7375,
    "category": "package"
  },
  {
    "code": "AARFEMP",
    "name": "AAROGYAM FEMALE PANEL",
    "mrp": 2999,
    "category": "package",
    "name_bn": "আরোগ্যম ফিমেল প্যানেল (মহিলাদের জন্য)",
    "fasting": true,
    "params": 95,
    "popular": true
  },
  {
    "code": "AARLITE",
    "name": "AAROGYAM LITE PACKAGE",
    "mrp": 1270,
    "category": "package"
  },
  {
    "code": "AALWU",
    "name": "AAROGYAM LITE WITH UTSH",
    "mrp": 1270,
    "category": "package"
  },
  {
    "code": "AARMALE",
    "name": "AAROGYAM MALE PACKAGE",
    "mrp": 2799,
    "category": "package",
    "name_bn": "আরোগ্যম মেল প্যাকেজ (পুরুষদের জন্য)",
    "fasting": true,
    "params": 95,
    "popular": true
  },
  {
    "code": "AARMENP",
    "name": "AAROGYAM MEN PANEL",
    "mrp": 4230,
    "category": "package"
  },
  {
    "code": "AARMINI",
    "name": "AAROGYAM MINI",
    "mrp": 999,
    "category": "package",
    "name_bn": "আরোগ্যম মিনি প্যাকেজ (Aarogyam Mini)",
    "fasting": true,
    "params": 45,
    "popular": true
  },
  {
    "code": "AARMBAS",
    "name": "AAROGYAM MONSOON BASIC PACKAGE",
    "mrp": 1270,
    "category": "package"
  },
  {
    "code": "AAMBUS",
    "name": "AAROGYAM MONSOON BASIC WITH USTSH",
    "mrp": 1270,
    "category": "package"
  },
  {
    "code": "AARPUR",
    "name": "AAROGYAM PURUSH - PACKAGE",
    "mrp": 5500,
    "category": "package",
    "name_bn": "আরোগ্যম পুরুষ প্যাকেজ (Aarogyam Purush)",
    "fasting": true,
    "params": 104,
    "popular": true
  },
  {
    "code": "AAPPUWU",
    "name": "AAROGYAM PURUSH PROFILE WITH UTSH",
    "mrp": 4880,
    "category": "package"
  },
  {
    "code": "AARSTR",
    "name": "AAROGYAM STREE - PACKAGE",
    "mrp": 5500,
    "category": "package",
    "name_bn": "আরোগ্যম স্ত্রী প্যাকেজ (Aarogyam Stree)",
    "fasting": true,
    "params": 105,
    "popular": true
  },
  {
    "code": "AASPWU",
    "name": "AAROGYAM STREE PROFILE WITH UTSH",
    "mrp": 4700,
    "category": "package"
  },
  {
    "code": "AARTSBA",
    "name": "AAROGYAM TAX SAVER - BASIC PACKAGE",
    "mrp": 3180,
    "category": "package"
  },
  {
    "code": "AARTSAP",
    "name": "AAROGYAM TAX SAVER ADVANCED - PACKAGE",
    "mrp": 5799,
    "category": "package"
  },
  {
    "code": "AARWAD",
    "name": "AAROGYAM WINTER ADVANCED PACKAGE",
    "mrp": 1990,
    "category": "package"
  },
  {
    "code": "AAWADWU",
    "name": "AAROGYAM WINTER ADVANCED WITH UTSH",
    "mrp": 1990,
    "category": "package"
  },
  {
    "code": "AARWBA",
    "name": "AAROGYAM WINTER BASIC PACKAGE",
    "mrp": 1500,
    "category": "package"
  },
  {
    "code": "AAWBAWU",
    "name": "AAROGYAM WINTER BASIC WITH UTSH",
    "mrp": 1500,
    "category": "package"
  },
  {
    "code": "AARXPLS",
    "name": "AAROGYAM X PLUS - PACKAGE",
    "mrp": 8799,
    "category": "package"
  },
  {
    "code": "AAXPWU",
    "name": "AAROGYAM X PLUS PROFILE WITH UTSH",
    "mrp": 9055,
    "category": "package"
  },
  {
    "code": "AARXPRP",
    "name": "AAROGYAM X PRO - PACKAGE",
    "mrp": 8499,
    "category": "package"
  },
  {
    "code": "AAXWU",
    "name": "AAROGYAM X PRO WITH UTSH",
    "mrp": 8470,
    "category": "package"
  },
  {
    "code": "AAXALLG",
    "name": "AAROGYAM X WITH ALLERGY SCREENING",
    "mrp": 8500,
    "category": "package"
  },
  {
    "code": "AA XWU",
    "name": "AAROGYAM X WITH UTSH",
    "mrp": 8499,
    "category": "package"
  },
  {
    "code": "AARXLPL",
    "name": "AAROGYAM XL PLUS - PACKAGE",
    "mrp": 10299,
    "category": "package"
  },
  {
    "code": "AAXLPWU",
    "name": "AAROGYAM XL PLUS PROFILE WITH UTSH",
    "mrp": 10880,
    "category": "package"
  },
  {
    "code": "AARXLPRO",
    "name": "AAROGYAM XL PRO - PACKAGE",
    "mrp": 9999,
    "category": "package"
  },
  {
    "code": "AAXLWU",
    "name": "AAROGYAM XL PRO WITH UTSH",
    "mrp": 10295,
    "category": "package"
  },
  {
    "code": "AAXLALLG",
    "name": "AAROGYAM XL WITH ALLERGY SCREENING",
    "mrp": 9999,
    "category": "package"
  },
  {
    "code": "AA XLWU",
    "name": "AAROGYAM XL WITH UTSH",
    "mrp": 9999,
    "category": "package"
  },
  {
    "code": "ADVFLBD-CKVT",
    "name": "ADVANCED FULL BODY CHECKUP WITH VITAMINS",
    "mrp": 1800,
    "category": "package",
    "name_bn": "অ্যাডভান্সড ফুল বডি চেকআপ উইথ ভিটামিনস",
    "fasting": true,
    "params": 85,
    "popular": true
  },
  {
    "code": "ARP",
    "name": "ADVANCED RENAL PROFILE",
    "mrp": 1065,
    "category": "package"
  },
  {
    "code": "ALLCOM",
    "name": "ALLERGY - COMPREHENSIVE PACKAGE (BY ELISA)",
    "mrp": 12300,
    "category": "package"
  },
  {
    "code": "ALLINH",
    "name": "ALLERGY - INHALANT PACKAGE (BY ELISA)",
    "mrp": 4730,
    "category": "package"
  },
  {
    "code": "ALLFOOD",
    "name": "ALLERGY - VEG FOOD (BY ELISA)",
    "mrp": 6160,
    "category": "package"
  },
  {
    "code": "AEDRP",
    "name": "ALLERGY DRUG PANEL (BY ELISA)",
    "mrp": 6115,
    "category": "package"
  },
  {
    "code": "APINADV",
    "name": "ALLERGY INHALANT ADVANCED PACKAGE (BY PHADIA)",
    "mrp": 5999,
    "category": "package"
  },
  {
    "code": "APINCOM",
    "name": "ALLERGY INHALANT COMPREHENSIVE PACKAGE (BY PHADIA)",
    "mrp": 10999,
    "category": "package"
  },
  {
    "code": "AENVP",
    "name": "ALLERGY NON VEG FOOD PANEL (BY ELISA)",
    "mrp": 3880,
    "category": "package"
  },
  {
    "code": "APVEGD",
    "name": "ALLERGY PANEL VEG FOOD AND DRUG (BY ELISA)",
    "mrp": 9000,
    "category": "package"
  },
  {
    "code": "APVEGI",
    "name": "ALLERGY PANEL VEG FOOD AND INHALANT (BY ELISA)",
    "mrp": 8000,
    "category": "package"
  },
  {
    "code": "APVNON",
    "name": "ALLERGY PANEL VEG FOOD AND NONVEG (BY ELISA)",
    "mrp": 8000,
    "category": "package"
  },
  {
    "code": "APVIND",
    "name": "ALLERGY PANEL VEG FOOD INHALANT AND DRUG (BY ELISA)",
    "mrp": 10000,
    "category": "package"
  },
  {
    "code": "APVNONI",
    "name": "ALLERGY PANEL VEG FOOD NONVEG FOOD AND INHALANT (BY ELISA)",
    "mrp": 10000,
    "category": "package"
  },
  {
    "code": "AMHAP",
    "name": "AMH ADVANCED PROFILE",
    "mrp": 3365,
    "category": "package"
  },
  {
    "code": "VIAMHSUP",
    "name": "AMH TOTAL SUPREME",
    "mrp": 2990,
    "category": "package"
  },
  {
    "code": "ARPAWUT",
    "name": "ARTHRITIS PROFILE A WITH UTSH",
    "mrp": 3645,
    "category": "package"
  },
  {
    "code": "ARTHPAD",
    "name": "ARTHRITIS PROFILE ADVANCED",
    "mrp": 4845,
    "category": "package"
  },
  {
    "code": "ARPBWUT",
    "name": "ARTHRITIS PROFILE B WITH UTSH",
    "mrp": 5465,
    "category": "package"
  },
  {
    "code": "ARTHPB",
    "name": "ARTHRITIS PROFILE BASIC",
    "mrp": 3150,
    "category": "package"
  },
  {
    "code": "ARPMWUT",
    "name": "ARTHRITIS PROFILE M WITH UTSH",
    "mrp": 2350,
    "category": "package"
  },
  {
    "code": "ARPWUTSH",
    "name": "ARTHRITIS PROFILE WITH UTSH",
    "mrp": 5880,
    "category": "package"
  },
  {
    "code": "B-CELL",
    "name": "B-CELL (CD19) ANALYSIS",
    "mrp": 2266,
    "category": "package"
  },
  {
    "code": "BOHMAXN",
    "name": "BAD OBSTETRIC HISTORY-BOH MAX",
    "mrp": 6055,
    "category": "package"
  },
  {
    "code": "BOHMINN",
    "name": "BAD OBSTETRIC HISTORY-BOH MINI",
    "mrp": 4115,
    "category": "package"
  },
  {
    "code": "BONE-A",
    "name": "BONE PROFILE - ADVANCED",
    "mrp": 3880,
    "category": "package"
  },
  {
    "code": "BONE B",
    "name": "BONE PROFILE - BASIC",
    "mrp": 2665,
    "category": "package"
  },
  {
    "code": "CRDPRO1",
    "name": "CARDIAC PACKAGE 1",
    "mrp": 1935,
    "category": "package"
  },
  {
    "code": "CARD MARK",
    "name": "CARDIAC RISK MARKERS",
    "mrp": 1499,
    "category": "package"
  },
  {
    "code": "CRMAD",
    "name": "CARDIAC RISK MARKERS - ADVANCED",
    "mrp": 1705,
    "category": "package"
  },
  {
    "code": "COMP-HEALTH",
    "name": "COMPLETE HEALTH CHECK WITH VITAMINS",
    "mrp": 2099,
    "category": "package"
  },
  {
    "code": "CHCVE",
    "name": "COMPLETE HEALTH CHECK WITH VITAMINS EXTENDED",
    "mrp": 2699,
    "category": "package"
  },
  {
    "code": "CVP",
    "name": "COMPLETE VITAMINS PROFILE",
    "mrp": 5770,
    "category": "package"
  },
  {
    "code": "DETOXC",
    "name": "DETOX DIET IMPACT HEALTH CHECKUP",
    "mrp": 3837,
    "category": "package"
  },
  {
    "code": "DRFBCA",
    "name": "DOCTOR RECOMMENDED FULL BODY CHECKUP ADVANCED",
    "mrp": 2940,
    "category": "package"
  },
  {
    "code": "DRFBCB",
    "name": "DOCTOR RECOMMENDED FULL BODY CHECKUP BASIC",
    "mrp": 2420,
    "category": "package"
  },
  {
    "code": "DP10",
    "name": "DRUG PANEL 10",
    "mrp": 2156,
    "category": "package"
  },
  {
    "code": "DP2",
    "name": "DRUG PANEL 2",
    "mrp": 506,
    "category": "package"
  },
  {
    "code": "DP3",
    "name": "DRUG PANEL 3",
    "mrp": 682,
    "category": "package"
  },
  {
    "code": "DP4",
    "name": "DRUG PANEL 4",
    "mrp": 847,
    "category": "package"
  },
  {
    "code": "DP5",
    "name": "DRUG PANEL 5",
    "mrp": 1078,
    "category": "package"
  },
  {
    "code": "DP6",
    "name": "DRUG PANEL 6",
    "mrp": 1298,
    "category": "package"
  },
  {
    "code": "DP7",
    "name": "DRUG PANEL 7",
    "mrp": 1529,
    "category": "package"
  },
  {
    "code": "DP8",
    "name": "DRUG PANEL 8",
    "mrp": 1705,
    "category": "package"
  },
  {
    "code": "DP9",
    "name": "DRUG PANEL 9",
    "mrp": 1925,
    "category": "package"
  },
  {
    "code": "EHCA",
    "name": "EMPLOYEE HEALTH CHECK - ADVANCED",
    "mrp": 999,
    "category": "package"
  },
  {
    "code": "EHCAM",
    "name": "EMPLOYEE HEALTH CHECK - ADVANCED (MALE)",
    "mrp": 1099,
    "category": "package"
  },
  {
    "code": "EMHCB",
    "name": "EMPLOYEE HEALTH CHECK - BASIC",
    "mrp": 749,
    "category": "package"
  },
  {
    "code": "EHCBM",
    "name": "EMPLOYEE HEALTH CHECK - BASIC (MALE)",
    "mrp": 849,
    "category": "package"
  },
  {
    "code": "EHCC",
    "name": "EMPLOYEE HEALTH CHECK - COMPREHENSIVE",
    "mrp": 1299,
    "category": "package"
  },
  {
    "code": "EHCCM",
    "name": "EMPLOYEE HEALTH CHECK - COMPREHENSIVE (MALE)",
    "mrp": 1399,
    "category": "package"
  },
  {
    "code": "EXFBC",
    "name": "EXECUTIVE FULL BODY CHECKUP",
    "mrp": 2200,
    "category": "package"
  },
  {
    "code": "EXFBHC",
    "name": "EXECUTIVE FULL BODY HEALTH CHECKUP",
    "mrp": 1999,
    "category": "package"
  },
  {
    "code": "EFBHC",
    "name": "EXTENSIVE FULL BODY HEALTH CHECKUP",
    "mrp": 3699,
    "category": "package"
  },
  {
    "code": "FATSVP",
    "name": "FAT - SOLUBLE VITAMINS PROFILE",
    "mrp": 2170,
    "category": "package"
  },
  {
    "code": "FESTPAC",
    "name": "Festive Healthy Package With Vitamins",
    "mrp": 2050,
    "category": "package"
  },
  {
    "code": "FININDEX",
    "name": "FREE ANDROGEN INDEX (FAIN)",
    "mrp": 1650,
    "category": "package"
  },
  {
    "code": "FHP25",
    "name": "FREEDOM HEALTHY PACKAGE 2025",
    "mrp": 2050,
    "category": "package"
  },
  {
    "code": "GGHP",
    "name": "GASTRO / GUT HEALTH PANEL",
    "mrp": 902,
    "category": "package"
  },
  {
    "code": "GLP1M",
    "name": "GLP 1 MONITORING PACKAGE",
    "mrp": 2990,
    "category": "package"
  },
  {
    "code": "GLP1",
    "name": "GLP 1 PACKAGE",
    "mrp": 2990,
    "category": "package"
  },
  {
    "code": "H3N2",
    "name": "H3N2 PLUS INFLUENZA PROFILE",
    "mrp": 4818,
    "category": "package"
  },
  {
    "code": "H3TN",
    "name": "H3T - PROFILE NEW",
    "mrp": 890,
    "category": "package"
  },
  {
    "code": "VIPRO",
    "name": "HEALTH CHECK PRO",
    "mrp": 1065,
    "category": "package"
  },
  {
    "code": "HEALCP",
    "name": "HEALTHSCREEN C PROFILE",
    "mrp": 2405,
    "category": "package"
  },
  {
    "code": "HEA26P",
    "name": "HEALTHY 2026 PACKAGE",
    "mrp": 2199,
    "category": "package"
  },
  {
    "code": "HEALTHYP1",
    "name": "HEALTHY PROFILE 1",
    "mrp": 1465,
    "category": "package"
  },
  {
    "code": "HEALTHYP2",
    "name": "HEALTHY PROFILE 2",
    "mrp": 1700,
    "category": "package"
  },
  {
    "code": "HEP B",
    "name": "HEPATITIS B PROFILE",
    "mrp": 3629,
    "category": "package"
  },
  {
    "code": "HEP TOT",
    "name": "HEPATITIS PANEL",
    "mrp": 5665,
    "category": "package"
  },
  {
    "code": "VIHEPTITISI",
    "name": "HEPATITIS PANEL I",
    "mrp": 4600,
    "category": "package"
  },
  {
    "code": "IMMP",
    "name": "IMMUNE FUNCTION PANEL",
    "mrp": 3399,
    "category": "package"
  },
  {
    "code": "VIIGGMA",
    "name": "IMMUNOGLOBIN PROFILE",
    "mrp": 1065,
    "category": "package"
  },
  {
    "code": "ImmuNTP",
    "name": "Immunoglobulin(IGG/IGM)",
    "mrp": 770,
    "category": "package"
  },
  {
    "code": "IDPA",
    "name": "IRON DEFICIENCY PROFILE ADVANCED",
    "mrp": 1035,
    "category": "package"
  },
  {
    "code": "JIPAA",
    "name": "JAANCH - INFERTILITY PROFILE ADVANCED",
    "mrp": 5290,
    "category": "package"
  },
  {
    "code": "JIPB",
    "name": "JAANCH - INFERTILITY PROFILE BASIC",
    "mrp": 2330,
    "category": "package"
  },
  {
    "code": "JMHSA",
    "name": "JAANCH - MENS HAIRFALL SCREENING ADVANCED",
    "mrp": 3495,
    "category": "package"
  },
  {
    "code": "JMSCC",
    "name": "JAANCH - MENS SKIN CARE CHECKUP",
    "mrp": 3525,
    "category": "package"
  },
  {
    "code": "JAPCODMN",
    "name": "JAANCH - PCOD (MINI)",
    "mrp": 2350,
    "category": "package"
  },
  {
    "code": "JAANCHPA",
    "name": "JAANCH - PCOD ADVANCED",
    "mrp": 6740,
    "category": "package"
  },
  {
    "code": "JAANCHPC",
    "name": "JAANCH - PCOD BASIC",
    "mrp": 5880,
    "category": "package"
  },
  {
    "code": "JWFPA",
    "name": "JAANCH - WINTER FEVER PANEL ADVANCED",
    "mrp": 2940,
    "category": "package"
  },
  {
    "code": "JWFPAII",
    "name": "JAANCH - WINTER FEVER PANEL ADVANCED (INCLUDING INFLUENZA)",
    "mrp": 5880,
    "category": "package"
  },
  {
    "code": "JWHSA",
    "name": "JAANCH - WOMENS HAIRFALL SCREENING ADVANCED",
    "mrp": 3530,
    "category": "package"
  },
  {
    "code": "JAANCHWSCC",
    "name": "JAANCH - WOMENS SKIN CARE CHECKUP",
    "mrp": 3525,
    "category": "package"
  },
  {
    "code": "JAALIAP",
    "name": "JAANCH ALCOHOL IMPACT ADVANCED PACKAGE",
    "mrp": 3499,
    "category": "package"
  },
  {
    "code": "JAALCIS",
    "name": "JAANCH ALCOHOL IMPACT SCREENING",
    "mrp": 1799,
    "category": "package"
  },
  {
    "code": "JAPADVANCED",
    "name": "JAANCH ANEMIA PROFILE ADVANCED",
    "mrp": 4595,
    "category": "package"
  },
  {
    "code": "JAPBASIC",
    "name": "JAANCH ANEMIA PROFILE BASIC",
    "mrp": 2560,
    "category": "package"
  },
  {
    "code": "JAPADV",
    "name": "JAANCH ANTENATAL PROFILE - ADVANCED",
    "mrp": 3290,
    "category": "package"
  },
  {
    "code": "JAPB",
    "name": "JAANCH ANTENATAL PROFILE - BASIC",
    "mrp": 1760,
    "category": "package"
  },
  {
    "code": "JAAUTP",
    "name": "JAANCH AUTOIMMUNE ADVANCED PACKAGE",
    "mrp": 3499,
    "category": "package"
  },
  {
    "code": "JAAUTSP",
    "name": "JAANCH AUTOIMMUNE SCREENING PACKAGE",
    "mrp": 1799,
    "category": "package"
  },
  {
    "code": "JAUTIMD",
    "name": "JAANCH AUTOIMMUNE THYROID SCREENING PANEL",
    "mrp": 2645,
    "category": "package"
  },
  {
    "code": "JBMH",
    "name": "JAANCH BONE AND MUSCLE HEALTH",
    "mrp": 2135,
    "category": "package"
  },
  {
    "code": "JCSBO",
    "name": "JAANCH CANCER SCREENING BREAST AND OVARIAN",
    "mrp": 1385,
    "category": "package"
  },
  {
    "code": "JCSFA",
    "name": "JAANCH CANCER SCREENING FEMALE ADVANCED",
    "mrp": 4275,
    "category": "package"
  },
  {
    "code": "JCSFB",
    "name": "JAANCH CANCER SCREENING FEMALE BASIC",
    "mrp": 2140,
    "category": "package"
  },
  {
    "code": "JCSMA",
    "name": "JAANCH CANCER SCREENING MALE ADVANCED",
    "mrp": 2140,
    "category": "package"
  },
  {
    "code": "JCSMB",
    "name": "JAANCH CANCER SCREENING MALE BASIC",
    "mrp": 1385,
    "category": "package"
  },
  {
    "code": "JACELIAC",
    "name": "JAANCH CELIAC DISEASE SCREENING PANEL",
    "mrp": 3925,
    "category": "package"
  },
  {
    "code": "JADENG",
    "name": "JAANCH DENGUE PROFILE",
    "mrp": 1799,
    "category": "package"
  },
  {
    "code": "JAADA",
    "name": "JAANCH DIABETES ADVANCED",
    "mrp": 1799,
    "category": "package"
  },
  {
    "code": "JAADC",
    "name": "JAANCH DIABETES COMPREHENSIVE",
    "mrp": 3499,
    "category": "package"
  },
  {
    "code": "JAADS",
    "name": "JAANCH DIABETES SCREENING",
    "mrp": 999,
    "category": "package"
  },
  {
    "code": "JAAFATP",
    "name": "JAANCH FATTY LIVER SCREENING PACKAGE",
    "mrp": 1799,
    "category": "package"
  },
  {
    "code": "JAFHSC",
    "name": "JAANCH FEMALE HORMONE SCREENING",
    "mrp": 1499,
    "category": "package"
  },
  {
    "code": "JAFEFC",
    "name": "JAANCH FERTILITY FEMALE CHECK",
    "mrp": 2999,
    "category": "package"
  },
  {
    "code": "JAFERM",
    "name": "JAANCH FERTILITY MALE CHECK",
    "mrp": 1199,
    "category": "package"
  },
  {
    "code": "JAAHMP",
    "name": "JAANCH HEALTHY MIND PACKAGE",
    "mrp": 1799,
    "category": "package"
  },
  {
    "code": "JAAHA",
    "name": "JAANCH HEART ADVANCED",
    "mrp": 2199,
    "category": "package"
  },
  {
    "code": "JAAHC",
    "name": "JAANCH HEART COMPREHENSIVE",
    "mrp": 3499,
    "category": "package"
  },
  {
    "code": "JAAHS",
    "name": "JAANCH HEART SCREENING",
    "mrp": 899,
    "category": "package"
  },
  {
    "code": "JAHSHA",
    "name": "JAANCH HEAT SHIELD ADVANCED",
    "mrp": 2499,
    "category": "package"
  },
  {
    "code": "JAHSHB",
    "name": "JAANCH HEAT SHIELD BASIC",
    "mrp": 1199,
    "category": "package"
  },
  {
    "code": "JAAHYP",
    "name": "JAANCH HYPERTENSION PACKAGE",
    "mrp": 3999,
    "category": "package"
  },
  {
    "code": "JAAIMH",
    "name": "JAANCH IMMUNITY HEALTH",
    "mrp": 2670,
    "category": "package"
  },
  {
    "code": "JIPE",
    "name": "JAANCH INFERTILITY PROFILE EXTENDED",
    "mrp": 5290,
    "category": "package"
  },
  {
    "code": "JAMHSC",
    "name": "JAANCH MALE HORMONE SCREENING",
    "mrp": 3599,
    "category": "package"
  },
  {
    "code": "JAMINFER",
    "name": "JAANCH MALE INFERTILITY PACKAGE",
    "mrp": 1230,
    "category": "package"
  },
  {
    "code": "JAMENOP",
    "name": "JAANCH MENOPAUSE ASSESSMENT PANEL",
    "mrp": 3565,
    "category": "package"
  },
  {
    "code": "JAAMFP",
    "name": "JAANCH MONSOON FEVER MINI PACKAGE",
    "mrp": 749,
    "category": "package"
  },
  {
    "code": "JMFA",
    "name": "JAANCH MONSOON FEVER PANEL - ADVANCED",
    "mrp": 2599,
    "category": "package"
  },
  {
    "code": "JMFRI",
    "name": "JAANCH MONSOON FEVER PANEL - ADVANCED (INCLUDING INFLUENZA)",
    "mrp": 5899,
    "category": "package"
  },
  {
    "code": "JFB",
    "name": "JAANCH MONSOON FEVER PANEL - BASIC",
    "mrp": 1999,
    "category": "package"
  },
  {
    "code": "JMFSUA",
    "name": "JAANCH MONSOON FEVER SCREEN WITH URINE ANALYSIS",
    "mrp": 1125,
    "category": "package"
  },
  {
    "code": "JN360C",
    "name": "JAANCH NUTRA360 CHECK",
    "mrp": 2599,
    "category": "package"
  },
  {
    "code": "JAANUTC",
    "name": "JAANCH NUTRITION CHECK",
    "mrp": 4999,
    "category": "package"
  },
  {
    "code": "JAOBAP",
    "name": "JAANCH OBESITY ADVANCED PACKAGE",
    "mrp": 3299,
    "category": "package"
  },
  {
    "code": "JAOBEP",
    "name": "JAANCH OBESITY BASIC PACKAGE",
    "mrp": 2049,
    "category": "package"
  },
  {
    "code": "JAPDHC",
    "name": "JAANCH POST DELIVERY HEALTH CHECK",
    "mrp": 2599,
    "category": "package"
  },
  {
    "code": "JPHCADV",
    "name": "JAANCH POSTPARTUM HEALTH CHECKUP - ADVANCED",
    "mrp": 2670,
    "category": "package"
  },
  {
    "code": "JPHCB",
    "name": "JAANCH POSTPARTUM HEALTH CHECKUP - BASIC",
    "mrp": 1600,
    "category": "package"
  },
  {
    "code": "JP-MHCKUP",
    "name": "JAANCH PRE-MARITAL HEALTH CHECK UP",
    "mrp": 2240,
    "category": "package"
  },
  {
    "code": "JPOESP",
    "name": "JAANCH PRE-OPERATIVE EYE SURGERY PACKAGE",
    "mrp": 1290,
    "category": "package"
  },
  {
    "code": "JPOPB",
    "name": "JAANCH PRE-OPERATIVE PACKAGE BASIC",
    "mrp": 2115,
    "category": "package"
  },
  {
    "code": "JPOPM",
    "name": "JAANCH PRE-OPERATIVE PACKAGE MINI",
    "mrp": 1290,
    "category": "package"
  },
  {
    "code": "JAARAP",
    "name": "JAANCH RHEUMATOID ARTHRITIS PACKAGE",
    "mrp": 2099,
    "category": "package"
  },
  {
    "code": "JAASWF",
    "name": "JAANCH SEXUAL WELLNESS FEMALE",
    "mrp": 3999,
    "category": "package"
  },
  {
    "code": "JAASWM",
    "name": "JAANCH SEXUAL WELLNESS MALE",
    "mrp": 3599,
    "category": "package"
  },
  {
    "code": "JSLEP",
    "name": "JAANCH SLE PANEL",
    "mrp": 4990,
    "category": "package"
  },
  {
    "code": "JAASMOP",
    "name": "JAANCH SMOKING IMPACT PACKAGE",
    "mrp": 2499,
    "category": "package"
  },
  {
    "code": "JSTPAD",
    "name": "JAANCH STD PROFILE ADVANCED",
    "mrp": 7645,
    "category": "package"
  },
  {
    "code": "JSTPRB",
    "name": "JAANCH STD PROFILE BASIC",
    "mrp": 2940,
    "category": "package"
  },
  {
    "code": "JSTDPE",
    "name": "JAANCH STD PROFILE EXTENDED",
    "mrp": 12350,
    "category": "package"
  },
  {
    "code": "JATYPRAV",
    "name": "JAANCH THYROID PROFILE - ADVANCED",
    "mrp": 2995,
    "category": "package"
  },
  {
    "code": "JATYPRB",
    "name": "JAANCH THYROID PROFILE - BASIC",
    "mrp": 585,
    "category": "package"
  },
  {
    "code": "JAATP",
    "name": "JAANCH THYROID PROFILE - BASIC PLUS",
    "mrp": 1200,
    "category": "package"
  },
  {
    "code": "JAAWMF",
    "name": "JAANCH WEIGHT MANAGEMENT PACKAGE FEMALE",
    "mrp": 3499,
    "category": "package"
  },
  {
    "code": "JAAWMM",
    "name": "JAANCH WEIGHT MANAGEMENT PACKAGE MALE",
    "mrp": 2899,
    "category": "package"
  },
  {
    "code": "JWFM",
    "name": "JAANCH WINTER FEVER MINI",
    "mrp": 750,
    "category": "package"
  },
  {
    "code": "JWFSUA",
    "name": "JAANCH WINTER FEVER SCREEN WITH URINE ANALYSIS",
    "mrp": 1125,
    "category": "package"
  },
  {
    "code": "KHCKUP",
    "name": "KIDNEY HEALTH CHECK UP",
    "mrp": 1690,
    "category": "package"
  },
  {
    "code": "KIDPWSEEL",
    "name": "KIDNEY PROFILE WITH ELECTROLYTES",
    "mrp": 1230,
    "category": "package"
  },
  {
    "code": "LIPIDEX",
    "name": "LIPID EXTENDED PROFILE",
    "mrp": 999,
    "category": "package"
  },
  {
    "code": "METABOLIC AN",
    "name": "METABOLIC PROFILE - ADVANCED NEW",
    "mrp": 4810,
    "category": "package"
  },
  {
    "code": "METABOLIC BN",
    "name": "METABOLIC PROFILE - BASIC NEW",
    "mrp": 3630,
    "category": "package"
  },
  {
    "code": "MMRIPRA",
    "name": "MMR IMMUNITY PROFILE IGG ANTIBODY",
    "mrp": 1650,
    "category": "package"
  },
  {
    "code": "MIPIA",
    "name": "MMR IMMUNITY PROFILE IGG IGM ANTIBODIES",
    "mrp": 3000,
    "category": "package"
  },
  {
    "code": "MGIP",
    "name": "MONSOON GASTRO INFECTION PANEL",
    "mrp": 1570,
    "category": "package"
  },
  {
    "code": "NK-CELL",
    "name": "NK CELL (CD16+CD56) ANALYSIS",
    "mrp": 2266,
    "category": "package"
  },
  {
    "code": "OBESEF",
    "name": "OBESITY PACKAGE FEMALE",
    "mrp": 3649,
    "category": "package"
  },
  {
    "code": "PALEO AN",
    "name": "PALEO PROFILE - ADVANCED NEW",
    "mrp": 4820,
    "category": "package"
  },
  {
    "code": "PALEO BN",
    "name": "PALEO PROFILE - BASIC NEW",
    "mrp": 2600,
    "category": "package"
  },
  {
    "code": "PHCUMWU",
    "name": "PLATINUM HEALTH CHECKUP - MALE WITH UTSH",
    "mrp": 2135,
    "category": "package"
  },
  {
    "code": "POIMA",
    "name": "POLLUTION IMPACT - ADVANCED",
    "mrp": 3265,
    "category": "package"
  },
  {
    "code": "POIMB",
    "name": "POLLUTION IMPACT - BASIC",
    "mrp": 2170,
    "category": "package"
  },
  {
    "code": "POINF",
    "name": "POLLUTION INFLAMMATION PROFILE",
    "mrp": 850,
    "category": "package"
  },
  {
    "code": "POSTHCA",
    "name": "POSTPARTUM HEALTH CHECKUP - ADVANCED",
    "mrp": 2838,
    "category": "package"
  },
  {
    "code": "POSTHCB",
    "name": "POSTPARTUM HEALTH CHECKUP - BASIC",
    "mrp": 1820,
    "category": "package"
  },
  {
    "code": "VIPREOPIII",
    "name": "PRE OPERATIVE PANEL III",
    "mrp": 2565,
    "category": "package"
  },
  {
    "code": "PRE-PP",
    "name": "PRE-PREGNANCY PROFILE",
    "mrp": 3168,
    "category": "package"
  },
  {
    "code": "PPADV",
    "name": "PREECLAMPSIA PROFILE ADVANCED",
    "mrp": 3740,
    "category": "package"
  },
  {
    "code": "PPB",
    "name": "PREECLAMPSIA PROFILE BASIC",
    "mrp": 3399,
    "category": "package"
  },
  {
    "code": "RUAO",
    "name": "ROUTINE URINE ANALYSIS OFFER",
    "mrp": 230,
    "category": "package"
  },
  {
    "code": "SCPF",
    "name": "SENIOR CITIZEN PROFILE FEMALE",
    "mrp": 2590,
    "category": "package",
    "name_bn": "সিনিয়র সিটিজেন প্রোফাইল (মহিলা)",
    "fasting": true,
    "params": 78,
    "popular": true
  },
  {
    "code": "SCPM",
    "name": "SENIOR CITIZEN PROFILE MALE",
    "mrp": 2549,
    "category": "package",
    "name_bn": "সিনিয়র সিটিজেন প্রোফাইল (পুরুষ)",
    "fasting": true,
    "params": 78,
    "popular": true
  },
  {
    "code": "SPA",
    "name": "SMOKERS PANEL - ADVANCED",
    "mrp": 3630,
    "category": "package"
  },
  {
    "code": "SPB",
    "name": "SMOKERS PANEL - BASIC",
    "mrp": 2420,
    "category": "package"
  },
  {
    "code": "SPOFIT-ADV",
    "name": "SPORTS FITNESS - ADVANCED",
    "mrp": 4115,
    "category": "package"
  },
  {
    "code": "SPOFIT-BAS",
    "name": "SPORTS FITNESS - BASIC",
    "mrp": 1935,
    "category": "package"
  },
  {
    "code": "SPOFIT-COMP",
    "name": "SPORTS FITNESS - COMPREHENSIVE",
    "mrp": 7870,
    "category": "package"
  },
  {
    "code": "SUMWEP-VIT",
    "name": "SUMMER WELLNESS PACKAGE WITH VITAMINS",
    "mrp": 2015,
    "category": "package"
  },
  {
    "code": "SWVE",
    "name": "SUMMER WELLNESS WITH VITAMINS AND ELECTROLYTES",
    "mrp": 2085,
    "category": "package"
  },
  {
    "code": "SUPERHP",
    "name": "SUPER HEALTHY PACKAGE",
    "mrp": 3970,
    "category": "package"
  },
  {
    "code": "T-CELL",
    "name": "T-CELL (CD3) ANALYSIS",
    "mrp": 2266,
    "category": "package"
  },
  {
    "code": "TBNK-P",
    "name": "TBNK CELL ANALYSIS PROFILE",
    "mrp": 2420,
    "category": "package"
  },
  {
    "code": "TORALL8",
    "name": "TORCH ALL 8",
    "mrp": 2860,
    "category": "package"
  },
  {
    "code": "TATP",
    "name": "TORCH ALL TEN PROFILE",
    "mrp": 2904,
    "category": "package"
  },
  {
    "code": "TGG",
    "name": "TORCH PANEL - IGG",
    "mrp": 1690,
    "category": "package"
  },
  {
    "code": "TORPAIG",
    "name": "TORCH PANEL IGG",
    "mrp": 1584,
    "category": "package"
  },
  {
    "code": "TORPIGM",
    "name": "TORCH PANEL IGM",
    "mrp": 1440,
    "category": "package"
  },
  {
    "code": "THPP",
    "name": "TOTAL HEALTH PROFILE PLUS",
    "mrp": 1760,
    "category": "package"
  },
  {
    "code": "TRIPLEH",
    "name": "TRIPLE H",
    "mrp": 999,
    "category": "package"
  },
  {
    "code": "ULFP",
    "name": "USTSH-LH-FSH-PRL",
    "mrp": 1562,
    "category": "package"
  },
  {
    "code": "VEGANP",
    "name": "VEGETERIAN OR VEGAN CARE PACKAGE",
    "mrp": 4617,
    "category": "package"
  },
  {
    "code": "VIMR",
    "name": "VIRAL MARKERS (RAPID)",
    "mrp": 1385,
    "category": "package"
  },
  {
    "code": "VITMINSPRO",
    "name": "VITAMINS PROFILE",
    "mrp": 2055,
    "category": "package"
  },
  {
    "code": "WWPV",
    "name": "WINTER WELLNESS PACKAGE WITH VITAMINS",
    "mrp": 2180,
    "category": "package"
  },
  {
    "code": "WAPWU",
    "name": "WOMEN ADVANCED PROFILE WITH UTSH",
    "mrp": 2595,
    "category": "package"
  },
  {
    "code": "WBPWU",
    "name": "WOMEN BASIC PROFILE WITH UTSH",
    "mrp": 2055,
    "category": "package"
  },
  {
    "code": "WCSA",
    "name": "WOMEN CANCER SCREENING ADVANCED",
    "mrp": 2935,
    "category": "package"
  },
  {
    "code": "WCSPD",
    "name": "WOMEN CANCER SCREENING PACKAGE ADVANCED",
    "mrp": 7270,
    "category": "package"
  },
  {
    "code": "WOCSPB",
    "name": "WOMEN CANCER SCREENING PACKAGE BASIC",
    "mrp": 2935,
    "category": "package"
  },
  {
    "code": "ALDRR",
    "name": "Aldosterone / Plasma Direct Renin Ratio",
    "mrp": 3499,
    "category": "profile"
  },
  {
    "code": "APHANI",
    "name": "ALLERGY ANIMAL PANEL (BY PHADIA)",
    "mrp": 3250,
    "category": "profile"
  },
  {
    "code": "APASTS",
    "name": "ALLERGY ASTHMA / RHINITIS SCREENING (BY PHADIA)",
    "mrp": 6450,
    "category": "profile"
  },
  {
    "code": "APCER",
    "name": "ALLERGY CEREAL/VEG FOOD PANEL (BY PHADIA)",
    "mrp": 6500,
    "category": "profile"
  },
  {
    "code": "APCOM",
    "name": "ALLERGY COMPREHENSIVE PROFILE (BY PHADIA)",
    "mrp": 14000,
    "category": "profile"
  },
  {
    "code": "APDUST",
    "name": "ALLERGY DUST PANEL (BY PHADIA)",
    "mrp": 3250,
    "category": "profile"
  },
  {
    "code": "APECZ",
    "name": "ALLERGY ECZEMA SCREENING PANEL (BY PHADIA)",
    "mrp": 5000,
    "category": "profile"
  },
  {
    "code": "APFP1",
    "name": "ALLERGY FOOD PANEL 1 (BY PHADIA)",
    "mrp": 6450,
    "category": "profile"
  },
  {
    "code": "APFR1",
    "name": "ALLERGY FRUIT PANEL 1 (BY PHADIA)",
    "mrp": 3500,
    "category": "profile"
  },
  {
    "code": "APFR2",
    "name": "ALLERGY FRUIT PANEL 2 (BY PHADIA)",
    "mrp": 3500,
    "category": "profile"
  },
  {
    "code": "APNV1",
    "name": "ALLERGY NON-VEGETARIAN PANEL 1 (BY PHADIA)",
    "mrp": 4700,
    "category": "profile"
  },
  {
    "code": "APNV2",
    "name": "ALLERGY NON-VEGETARIAN PANEL 2 (BY PHADIA)",
    "mrp": 4700,
    "category": "profile"
  },
  {
    "code": "APNUT",
    "name": "ALLERGY NUT PANEL (BY PHADIA)",
    "mrp": 4600,
    "category": "profile"
  },
  {
    "code": "APPOL",
    "name": "ALLERGY POLLEN PANEL (BY PHADIA)",
    "mrp": 6000,
    "category": "profile"
  },
  {
    "code": "APVE1",
    "name": "ALLERGY VEGETABLE PANEL 1 (BY PHADIA)",
    "mrp": 3300,
    "category": "profile"
  },
  {
    "code": "APVE2",
    "name": "ALLERGY VEGETABLE PANEL 2 (BY PHADIA)",
    "mrp": 3200,
    "category": "profile"
  },
  {
    "code": "APVE3",
    "name": "ALLERGY VEGETABLE PANEL 3 (BY PHADIA)",
    "mrp": 3200,
    "category": "profile"
  },
  {
    "code": "AAP",
    "name": "AMINO ACID PROFILE (35)",
    "mrp": 2420,
    "category": "profile"
  },
  {
    "code": "APR",
    "name": "APOLIPROTEIN RATIO",
    "mrp": 995,
    "category": "profile"
  },
  {
    "code": "BTHAL",
    "name": "BETA-THALASSEMIA SCREENING",
    "mrp": 572,
    "category": "profile"
  },
  {
    "code": "BEAP",
    "name": "BLOOD ELEMENT ANALYSIS PROFILE",
    "mrp": 1023,
    "category": "profile"
  },
  {
    "code": "BGRT",
    "name": "BLOOD GROUPING AND RH TYPING",
    "mrp": 230,
    "category": "profile"
  },
  {
    "code": "CD3",
    "name": "CD3CD4CD8",
    "mrp": 2230,
    "category": "profile"
  },
  {
    "code": "CHIRAP",
    "name": "CHIKUNGUNYA RAPID TEST (IGG/IGM)",
    "mrp": 605,
    "category": "profile"
  },
  {
    "code": "CUA",
    "name": "COMPLETE URINE ANALYSIS",
    "mrp": 449,
    "category": "profile"
  },
  {
    "code": "DOA P6",
    "name": "DOA PANEL-6",
    "mrp": 902,
    "category": "profile"
  },
  {
    "code": "DMFT8-13WT",
    "name": "DOUBLE MARKER FIRST TRIMESTER 8-13 WEEK (FMF CERTIFIED)",
    "mrp": 2605,
    "category": "profile"
  },
  {
    "code": "EGFRED",
    "name": "EGFR (ESTIMATED GLOMERULAR FILTRATION RATE)",
    "mrp": 231,
    "category": "profile"
  },
  {
    "code": "E22",
    "name": "ELEMENTS 22 (TOXIC AND NUTRIENTS)",
    "mrp": 2400,
    "category": "profile"
  },
  {
    "code": "FIB4IN",
    "name": "FIBROSIS INDEX (FIB-4)",
    "mrp": 400,
    "category": "profile"
  },
  {
    "code": "FLUPANEL",
    "name": "FLU PANEL",
    "mrp": 3000,
    "category": "profile"
  },
  {
    "code": "FOODI",
    "name": "FOOD INTOLERANCE PROFILE",
    "mrp": 11499,
    "category": "profile"
  },
  {
    "code": "AdvancedTFT",
    "name": "FT3-FT4-USTSH",
    "mrp": 720,
    "category": "profile",
    "name_bn": "অ্যাডভান্সড থাইরয়েড প্রোফাইল (FT3-FT4-USTSH)",
    "fasting": false,
    "params": 3,
    "popular": true
  },
  {
    "code": "GT100",
    "name": "GLUCOSE TOLERANCE TEST (100 GM)",
    "mrp": 400,
    "category": "profile"
  },
  {
    "code": "GT75",
    "name": "GLUCOSE TOLERANCE TEST (75 GM)",
    "mrp": 300,
    "category": "profile"
  },
  {
    "code": "HBA P",
    "name": "HBA PROFILE",
    "mrp": 365,
    "category": "profile"
  },
  {
    "code": "HBA1CWG",
    "name": "HbA1c with Graph",
    "mrp": 550,
    "category": "profile"
  },
  {
    "code": "HVA",
    "name": "HEMOGLOBIN VARIANT ANALYSIS - HPLC",
    "mrp": 935,
    "category": "profile"
  },
  {
    "code": "H6",
    "name": "HEMOGRAM - 6 PART (DIFF)",
    "mrp": 330,
    "category": "profile",
    "name_bn": "কমপ্লিট হিমোগ্রাম / সিবিসি (CBC 6-Part)",
    "fasting": false,
    "params": 28,
    "popular": true
  },
  {
    "code": "HIVRA",
    "name": "HIV 1 AND 2 ANTIBODY RAPID SCREENING TEST",
    "mrp": 560,
    "category": "profile"
  },
  {
    "code": "HIRI",
    "name": "HOMA INSULIN RESISTANCE INDEX",
    "mrp": 460,
    "category": "profile"
  },
  {
    "code": "BILI-IND",
    "name": "INDIRECT BILIRUBIN",
    "mrp": 350,
    "category": "profile"
  },
  {
    "code": "INFLPL",
    "name": "INFLUENZA PANEL",
    "mrp": 4710,
    "category": "profile"
  },
  {
    "code": "INFLPLABH",
    "name": "INFLUENZA PANEL (INFLUENZA A AND B AND H1N1)",
    "mrp": 3630,
    "category": "profile"
  },
  {
    "code": "INSINDICES",
    "name": "INSULIN INDICES",
    "mrp": 700,
    "category": "profile"
  },
  {
    "code": "IRONPRO",
    "name": "IRON DEFICIENCY PROFILE",
    "mrp": 705,
    "category": "profile",
    "name_bn": "আয়রন ডেফিসিয়েন্সি প্রোফাইল",
    "fasting": false,
    "params": 4,
    "popular": true
  },
  {
    "code": "KAPLAMRTIO",
    "name": "KAPPA LAMBDA RATIO",
    "mrp": 1200,
    "category": "profile"
  },
  {
    "code": "KIDPRO",
    "name": "KIDPRO",
    "mrp": 900,
    "category": "profile",
    "name_bn": "কিডনি প্রোফাইল (KFT / RFT)",
    "fasting": false,
    "params": 7,
    "popular": true
  },
  {
    "code": "KPWOCALC",
    "name": "KIDPRO WITHOUT CALCIUM",
    "mrp": 525,
    "category": "profile"
  },
  {
    "code": "LEPRAP",
    "name": "LEPTOSPIRA RAPID TEST (IGG/IGM)",
    "mrp": 627,
    "category": "profile"
  },
  {
    "code": "LFSR",
    "name": "LH FSH RATIO",
    "mrp": 999,
    "category": "profile"
  },
  {
    "code": "LIPID",
    "name": "LIPID PROFILE",
    "mrp": 620,
    "category": "profile",
    "name_bn": "লিপিড প্রোফাইল (কোলেস্টেরল পরীক্ষা)",
    "fasting": true,
    "params": 8,
    "popular": true
  },
  {
    "code": "LFT",
    "name": "LIVER FUNCTION TESTS",
    "mrp": 790,
    "category": "profile",
    "name_bn": "লিভার ফাংশন টেস্ট (LFT)",
    "fasting": false,
    "params": 11,
    "popular": true
  },
  {
    "code": "MA",
    "name": "MALARIAL ANTIGEN",
    "mrp": 680,
    "category": "profile"
  },
  {
    "code": "NEOT",
    "name": "NEOT",
    "mrp": 360,
    "category": "profile"
  },
  {
    "code": "OG50",
    "name": "ORAL GLUCOSE CHALLENGE TEST (50 GM)",
    "mrp": 200,
    "category": "profile"
  },
  {
    "code": "PBS",
    "name": "PERIPHERAL BLOOD SMEAR (PBS)",
    "mrp": 720,
    "category": "profile"
  },
  {
    "code": "PMARKER",
    "name": "PREECLAMPSIA MARKERS",
    "mrp": 4500,
    "category": "profile"
  },
  {
    "code": "QMST14-22",
    "name": "QUADRUPLE MARKER SECOND TRIMESTER 14-22 WEEK",
    "mrp": 3450,
    "category": "profile"
  },
  {
    "code": "Q -TB",
    "name": "QUANTIFERON - TB",
    "mrp": 1771,
    "category": "profile"
  },
  {
    "code": "QTBGP",
    "name": "QUANTIFERON -TB GOLD PLUS",
    "mrp": 3199,
    "category": "profile"
  },
  {
    "code": "ROMAPRO",
    "name": "ROMA (RISK OF OVARIAN MALIGNANCY)",
    "mrp": 2838,
    "category": "profile"
  },
  {
    "code": "RUA",
    "name": "ROUTINE URINE ANALYSIS",
    "mrp": 180,
    "category": "profile"
  },
  {
    "code": "SCRRAP",
    "name": "SCRUB TYPHUS RAPID TEST (IGG/IGM)",
    "mrp": 572,
    "category": "profile"
  },
  {
    "code": "SA-GR",
    "name": "SERUM ALBUMIN-GLOBULIN RATIO",
    "mrp": 350,
    "category": "profile"
  },
  {
    "code": "SBCR",
    "name": "SERUM BUN-CREATININE RATIO",
    "mrp": 405,
    "category": "profile"
  },
  {
    "code": "SEEL",
    "name": "SERUM ELECTROLYTES",
    "mrp": 470,
    "category": "profile"
  },
  {
    "code": "OT-PTR",
    "name": "SERUM SGOT-SGPT RATIO",
    "mrp": 350,
    "category": "profile"
  },
  {
    "code": "SUCR",
    "name": "SERUM UREA-CREATININE RATIO",
    "mrp": 405,
    "category": "profile"
  },
  {
    "code": "STEROID",
    "name": "STEROID PROFILE",
    "mrp": 3399,
    "category": "profile"
  },
  {
    "code": "SP-10",
    "name": "STEROID PROFILE-10",
    "mrp": 3115,
    "category": "profile"
  },
  {
    "code": "SP-9",
    "name": "STEROID PROFILE-9",
    "mrp": 2820,
    "category": "profile"
  },
  {
    "code": "ULTRATFT",
    "name": "T3-T4-USTSH",
    "mrp": 420,
    "category": "profile",
    "name_bn": "থাইরয়েড প্রোফাইল (T3-T4-USTSH)",
    "fasting": false,
    "params": 3,
    "popular": true
  },
  {
    "code": "TMST14-22",
    "name": "TRIPLE MARKER SECOND TRIMESTER 14-22 WEEK",
    "mrp": 2995,
    "category": "profile"
  },
  {
    "code": "TYPH",
    "name": "TYPHOID TEST",
    "mrp": 1005,
    "category": "profile"
  },
  {
    "code": "UAAC",
    "name": "URINE ANALYSIS AND CULTURE",
    "mrp": 1205,
    "category": "profile"
  },
  {
    "code": "URELE",
    "name": "URINE ELECTROLYTES",
    "mrp": 341,
    "category": "profile"
  },
  {
    "code": "UEAP",
    "name": "URINE ELEMENT ANALYSIS PROFILE",
    "mrp": 1133,
    "category": "profile"
  },
  {
    "code": "UMA",
    "name": "URINE MICROALBUMIN",
    "mrp": 595,
    "category": "profile"
  },
  {
    "code": "UPCRP",
    "name": "URINE PROTEIN CREATININE RATIO",
    "mrp": 400,
    "category": "profile"
  },
  {
    "code": "UROG",
    "name": "URINOGRAM",
    "mrp": 341,
    "category": "profile"
  },
  {
    "code": "VIRPAN",
    "name": "VIRAL FLU PANEL (INFLUENZA A B H3N2 H1N1 RSV) QUALITATIVE RT-PCR",
    "mrp": 3585,
    "category": "profile"
  },
  {
    "code": "WBCVP",
    "name": "VITAMIN B COMPLEX PROFILE",
    "mrp": 1999,
    "category": "profile"
  },
  {
    "code": "VDP",
    "name": "VITAMIN D PROFILE",
    "mrp": 1910,
    "category": "profile"
  },
  {
    "code": "VDTAB12C",
    "name": "VITAMIN D TOTAL AND B12 COMBO",
    "mrp": 1600,
    "category": "profile",
    "name_bn": "ভিটামিন ডি এবং বি১২ কম্বো (Vitamin D + B12)",
    "fasting": false,
    "params": 2,
    "popular": true
  },
  {
    "code": "WIDAL",
    "name": "WIDAL",
    "mrp": 264,
    "category": "profile"
  },
  {
    "code": "WITA",
    "name": "WIDAL TUBE AGGLUTINATION",
    "mrp": 451,
    "category": "profile"
  },
  {
    "code": "AHGLU",
    "name": "1,5 ANHYDROGLUCITOL",
    "mrp": 940,
    "category": "test"
  },
  {
    "code": "17OH",
    "name": "17 OH PROGESTERONE",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "24UALB",
    "name": "24 HOURS URINARY MICROALBUMIN",
    "mrp": 500,
    "category": "test"
  },
  {
    "code": "24UPRO",
    "name": "24 HOURS URINE PROTEIN",
    "mrp": 392,
    "category": "test"
  },
  {
    "code": "VITDC",
    "name": "25-OH VITAMIN D (TOTAL)",
    "mrp": 1300,
    "category": "test",
    "name_bn": "২৫-ওএইচ ভিটামিন ডি টোটাল (Vitamin D)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "ACRAB",
    "name": "ACETYLCHOLINE RECEPTOR AUTOANTIBODY",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "ACP",
    "name": "ACID PHOSPHATASE",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "AVB12",
    "name": "ACTIVE VITAMIN B12 (HOLOTRANSCOBALAMIN)",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "ADA",
    "name": "ADENOSINE DEAMINASE",
    "mrp": 870,
    "category": "test"
  },
  {
    "code": "ACTH",
    "name": "ADRENOCORTICOTROPIC HORMONE (ACTH)",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "AHEL",
    "name": "ADULT HEMOGLOBIN ELECTROPHORESIS",
    "mrp": 1250,
    "category": "test"
  },
  {
    "code": "SGPT",
    "name": "ALANINE TRANSAMINASE (SGPT)",
    "mrp": 225,
    "category": "test",
    "name_bn": "এসজিপিটি লিভার টেস্ট (ALT / SGPT)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "SALB",
    "name": "ALBUMIN - SERUM",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "ALC",
    "name": "ALCOHOL",
    "mrp": 710,
    "category": "test"
  },
  {
    "code": "ALDOL",
    "name": "ALDOLASE",
    "mrp": 1185,
    "category": "test"
  },
  {
    "code": "ALDOS",
    "name": "ALDOSTERONE",
    "mrp": 1760,
    "category": "test"
  },
  {
    "code": "ALKP",
    "name": "ALKALINE PHOSPHATASE",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "AEACA",
    "name": "ALLERGY ACACIA ARABICA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEACR",
    "name": "ALLERGY ACRYLIC(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEAGR",
    "name": "ALLERGY AGROPYRON REPENS (COUCH (QUACK) GRASS)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APALM",
    "name": "ALLERGY ALMOND ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEALP",
    "name": "ALLERGY ALPHA LACTOGLOBULIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APALT",
    "name": "ALLERGY ALTERNARIA ALTERNATA ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEALT",
    "name": "ALLERGY ALTERNARIA ALTERNATA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEAMA",
    "name": "ALLERGY AMARANTHUS RETROFLEXUS (COMMON PIGWEED)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APAPP",
    "name": "ALLERGY APPLE ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEART",
    "name": "ALLERGY ARTEMISIA SCOPARIA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APASP",
    "name": "ALLERGY ASPERGILLUS FLAVUS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APASF",
    "name": "ALLERGY ASPERGILLUS FUMIGATUS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APASN",
    "name": "ALLERGY ASPERGILLUS NIGER ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEAST",
    "name": "ALLERGY ASPERGILLUS TAMARIE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APAST",
    "name": "ALLERGY ASPERGILLUS TERREUS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEAVE",
    "name": "ALLERGY AVENA SATIVA (CULTIVATED OAT)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APBAH",
    "name": "ALLERGY BAHIA GRASS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBAD",
    "name": "ALLERGY BAJARI DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBAJ",
    "name": "ALLERGY BAJRA (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APBAN",
    "name": "ALLERGY BANANA ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBAR",
    "name": "ALLERGY BARLEY (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APBEE",
    "name": "ALLERGY BEEF (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APBER",
    "name": "ALLERGY BERMUDA GRASS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBET",
    "name": "ALLERGY BETA LACTOGLOBULIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBLA",
    "name": "ALLERGY BLACK PEPPER(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APBLU",
    "name": "ALLERGY BLUE MUSSEL (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APBRN",
    "name": "ALLERGY BRAZIL NUT ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBGR",
    "name": "ALLERGY BRILLIANT GREEN (DYE)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBRI",
    "name": "ALLERGY BRINJAL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBUF",
    "name": "ALLERGY BUFFALO DANDER (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCAB",
    "name": "ALLERGY CABBAGE (PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCAN",
    "name": "ALLERGY CANDIDA ALBICANS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECAN",
    "name": "ALLERGY CANDIDA ALBICANS(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECAP",
    "name": "ALLERGY CAPSICUM (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECAR",
    "name": "ALLERGY CARDAMOM (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECPA",
    "name": "ALLERGY CARICA PAPAYA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCAR",
    "name": "ALLERGY CARROT (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECRT",
    "name": "ALLERGY CARROT(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECAS",
    "name": "ALLERGY CASEIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCAS",
    "name": "ALLERGY CASHEW NUT (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCAT",
    "name": "ALLERGY CAT DANDER ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECAU",
    "name": "ALLERGY CAULIFLOWER (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCEL",
    "name": "ALLERGY CELERY ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHS",
    "name": "ALLERGY CHEESE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHA",
    "name": "ALLERGY CHENOPODIUM ALBUM(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHE",
    "name": "ALLERGY CHERRY (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCHP",
    "name": "ALLERGY CHICK PEA ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCH2",
    "name": "ALLERGY CHICKEN ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHD",
    "name": "ALLERGY CHICKEN DROPPING (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHF",
    "name": "ALLERGY CHICKEN FEATHERS (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHP",
    "name": "ALLERGY CHILI PEPPER (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECHO",
    "name": "ALLERGY CHOCOLATE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCLA",
    "name": "ALLERGY CLADOSPORIUM HERBARUM ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECLA",
    "name": "ALLERGY CLADOSPORIUM HERBARUM(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECLV",
    "name": "ALLERGY CLOVES (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECOC",
    "name": "ALLERGY COCKROACH DUST (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCOC",
    "name": "ALLERGY COCKROACH GERMAN ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECCO",
    "name": "ALLERGY COCOA (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCON",
    "name": "ALLERGY COCONUT ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECNU",
    "name": "ALLERGY COCUS NUCIFERA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECOF",
    "name": "ALLERGY COFFEE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECOL",
    "name": "ALLERGY COLLAGEN(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCPW",
    "name": "ALLERGY COMMON PIGWEED (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCO2",
    "name": "ALLERGY COMMON SILVER BIRCH ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECOR",
    "name": "ALLERGY CORIANDER(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECDU",
    "name": "ALLERGY COTTON DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECOT",
    "name": "ALLERGY COTTON LINTERS (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECSE",
    "name": "ALLERGY COTTON SEED(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCOW",
    "name": "ALLERGY COW DANDER ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECRA",
    "name": "ALLERGY CRAB (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECRI",
    "name": "ALLERGY CRICKET(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCUC",
    "name": "ALLERGY CUCUMBER (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APCUL",
    "name": "ALLERGY CULTIVATED RYE (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECUM",
    "name": "ALLERGY CUMIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECUR",
    "name": "ALLERGY CURD (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECRY",
    "name": "ALLERGY CURRY (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDAC",
    "name": "ALLERGY DACTYLIS GLOMERATA (COCKSFOOT)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDAI",
    "name": "ALLERGY DAISY(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDAL",
    "name": "ALLERGY DAL CHANA (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDAN",
    "name": "ALLERGY DANDELION(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDET",
    "name": "ALLERGY DETERGENT (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APDOG",
    "name": "ALLERGY DOG DANDER ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEAMO",
    "name": "ALLERGY DRUG AMOXYCILLIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEASP",
    "name": "ALLERGY DRUG ASPIRIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBRO",
    "name": "ALLERGY DRUG BROMHEXINE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEBRU",
    "name": "ALLERGY DRUG BRUFEN (IBUPROFEN) (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECEF",
    "name": "ALLERGY DRUG CEFIXIME (CEFACLOR) (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECIP",
    "name": "ALLERGY DRUG CIPROFLOXACIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AECLO",
    "name": "ALLERGY DRUG CLOXACILLIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDIC",
    "name": "ALLERGY DRUG DICLOFENAC (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEDOX",
    "name": "ALLERGY DRUG DOXYCYCLINE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEERY",
    "name": "ALLERGY DRUG ERYTHROMYCIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMET",
    "name": "ALLERGY DRUG METAMIZOL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AENOR",
    "name": "ALLERGY DRUG NORFLOXACIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEOFL",
    "name": "ALLERGY DRUG OFLOXACIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEOXA",
    "name": "ALLERGY DRUG OXACILLIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPAR",
    "name": "ALLERGY DRUG PARACETAMOL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPEN",
    "name": "ALLERGY DRUG PENICILLIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESUL",
    "name": "ALLERGY DRUG SULPHA (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETET",
    "name": "ALLERGY DRUG TETRACYCLINE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETIN",
    "name": "ALLERGY DRUG TINIDAZOLE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEXYL",
    "name": "ALLERGY DRUG XYLOCAINE (LIDOCAINE) (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APEGG",
    "name": "ALLERGY EGG ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEEGP",
    "name": "ALLERGY EGG PLANT/AUBERGINE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APEGW",
    "name": "ALLERGY EGG WHITE ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APELM",
    "name": "ALLERGY ELM ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEETH",
    "name": "ALLERGY ETHYLENE OXIDE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEEUC",
    "name": "ALLERGY EUCALYPTUS(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEFEA",
    "name": "ALLERGY FEATHER DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEFEN",
    "name": "ALLERGY FENNEL SEED (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEFIG",
    "name": "ALLERGY FIG (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APFIS",
    "name": "ALLERGY FISH COD ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEFLO",
    "name": "ALLERGY FLOUR MILL DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEFOR",
    "name": "ALLERGY FORMALDEHYDE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APGAR",
    "name": "ALLERGY GARLIC ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEGIN",
    "name": "ALLERGY GINGER (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APGLU",
    "name": "ALLERGY GLUTEN ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEGOA",
    "name": "ALLERGY GOAT DANDER (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEGRA",
    "name": "ALLERGY GRAPE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEGUA",
    "name": "ALLERGY GUAVA (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHAI",
    "name": "ALLERGY HAIR DYE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHAY",
    "name": "ALLERGY HAY DUST (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APHAZ",
    "name": "ALLERGY HAZEL NUT ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHAZ",
    "name": "ALLERGY HAZEL NUT(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHET",
    "name": "ALLERGY HETEROCERA MIX (MOTH)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHON",
    "name": "ALLERGY HONEY (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHBE",
    "name": "ALLERGY HONEY BEE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHVU",
    "name": "ALLERGY HORDEUM VULGARE (BARLEY)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APHOR",
    "name": "ALLERGY HORSE DANDER ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APDUS",
    "name": "ALLERGY HOUSE DUST ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHDU",
    "name": "ALLERGY HOUSE DUST (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APHDP",
    "name": "Allergy House Dust Mite - D.Pteronyssinus ( By Phadia)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APHDF",
    "name": "Allergy House Dust Mite- D.Farinae ( By Phadia)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEHFY",
    "name": "ALLERGY HOUSE FLY (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APINS",
    "name": "ALLERGY INSULIN HUMAN ( BY PHADIA)",
    "mrp": 1400,
    "category": "test"
  },
  {
    "code": "AEJAS",
    "name": "ALLERGY JASMINUM SPP. (JASMINE)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEJEE",
    "name": "ALLERGY JEERA DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APJOH",
    "name": "ALLERGY JOHNSON GRASS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEJOW",
    "name": "ALLERGY JOWAR (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEJDU",
    "name": "ALLERGY JOWAR DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEJUL",
    "name": "ALLERGY JULIFLORA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEJUN",
    "name": "ALLERGY JUNIPERUS COMMUNIS(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEJUT",
    "name": "ALLERGY JUTE DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEKIW",
    "name": "ALLERGY KIWI (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AELAT",
    "name": "ALLERGY LATEX(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AELAW",
    "name": "ALLERGY LAWSONIA ENERNIL (HENNA)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AELEA",
    "name": "ALLERGY LEATHER(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APLEM",
    "name": "ALLERGY LEMON ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APLEN",
    "name": "ALLERGY LENTIL ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APLOB",
    "name": "ALLERGY LOBSTER (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AELOL",
    "name": "ALLERGY LOLIUM PERENNE (RYE-GRASS)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APMAI",
    "name": "ALLERGY MAIZE (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMAN",
    "name": "ALLERGY MANGO (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMAS",
    "name": "ALLERGY MASOOR DAL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APMEA",
    "name": "ALLERGY MEADOW GRASS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMEL",
    "name": "ALLERGY MELON (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APMES",
    "name": "ALLERGY MESQUITE ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APMIL",
    "name": "ALLERGY MILK ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMLT",
    "name": "ALLERGY MILLET (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMOO",
    "name": "ALLERGY MOONG DAL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMOS",
    "name": "ALLERGY MOSQUITO (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMUC",
    "name": "ALLERGY MUCOR MUCEDO(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APMUC",
    "name": "ALLERGY MUCOR RACEMOSUS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APMUG",
    "name": "ALLERGY MUGWORT ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMSH",
    "name": "ALLERGY MUSHROOM (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMUS",
    "name": "ALLERGY MUSTARD (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEMUT",
    "name": "ALLERGY MUTTON (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AENEU",
    "name": "ALLERGY NEUROSPORA SPP(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APOAT",
    "name": "ALLERGY OAT (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEOLI",
    "name": "ALLERGY OLIVE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APONI",
    "name": "ALLERGY ONION ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APORA",
    "name": "ALLERGY ORANGE ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPAI",
    "name": "ALLERGY PAINTS (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPAP",
    "name": "ALLERGY PAPAYA ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPDU",
    "name": "ALLERGY PAPER DUST (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPA2",
    "name": "ALLERGY PAPRIKA- SWEET PEPPER (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPAR",
    "name": "ALLERGY PARROT FEATHERS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPTN",
    "name": "ALLERGY PARTHENIUM (COMMON RAGWEED) (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPEA",
    "name": "ALLERGY PEA (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APEAC",
    "name": "ALLERGY PEACH ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPEN",
    "name": "ALLERGY PEANUT ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPER",
    "name": "ALLERGY PEAR (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPEA",
    "name": "ALLERGY PEAS (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPBR",
    "name": "ALLERGY PENICILLIUM BREVI, COMPACTUM(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APENC",
    "name": "ALLERGY PENICILLIUM CHRYSOGENUM ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPNO",
    "name": "ALLERGY PENICILLIUM NOTATUM(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPEG",
    "name": "ALLERGY PENICILLOYL G ( BY PHADIA)",
    "mrp": 1400,
    "category": "test"
  },
  {
    "code": "APPEV",
    "name": "ALLERGY PENICILLOYL V ( BY PHADIA)",
    "mrp": 1400,
    "category": "test"
  },
  {
    "code": "AEPRF",
    "name": "ALLERGY PERFUME (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPHA",
    "name": "ALLERGY PHADIATOP ADULT",
    "mrp": 1000,
    "category": "test"
  },
  {
    "code": "APPH2",
    "name": "ALLERGY PHADIATOP PEDIATRIC",
    "mrp": 1000,
    "category": "test"
  },
  {
    "code": "AEPHO",
    "name": "ALLERGY PHOENIX DACTYLIFERA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPHT",
    "name": "ALLERGY PHTHALIC ANHYDRIDE (POLYESTER)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPID",
    "name": "ALLERGY PIGEON DROPPING (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPIG",
    "name": "ALLERGY PIGEON FEATHERS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPNE",
    "name": "ALLERGY PINE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPIN",
    "name": "ALLERGY PINEAPPLE ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPIS",
    "name": "ALLERGY PISTACHIO NUT (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPLA",
    "name": "ALLERGY PLASTIC(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPLU",
    "name": "ALLERGY PLUM (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPOA",
    "name": "ALLERGY POA PRATENSIS (MEADOW GRASS)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPOM",
    "name": "ALLERGY POMEGRANATE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPOR",
    "name": "ALLERGY PORK (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APPOT",
    "name": "ALLERGY POTATO (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPRA",
    "name": "ALLERGY PRAWN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPUM",
    "name": "ALLERGY PUMPKIN SEED (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AERAG",
    "name": "ALLERGY RAGI (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AERAI",
    "name": "ALLERGY RAISIN (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AERAJ",
    "name": "ALLERGY RAJMA DAL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APRIC",
    "name": "ALLERGY RICE ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AERDU",
    "name": "ALLERGY RICE DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APRYE",
    "name": "ALLERGY RYE GRASS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESAF",
    "name": "ALLERGY SAFFRON (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APSA2",
    "name": "ALLERGY SALMON (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESEM",
    "name": "ALLERGY SEMOLINA(RAWA) (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APSES",
    "name": "ALLERGY SESAME SEED (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESHE",
    "name": "ALLERGY SHEEP WOOL (TREATED)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APSHR",
    "name": "ALLERGY SHRIMP ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESIL",
    "name": "ALLERGY SILK(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESVU",
    "name": "ALLERGY SORVHUM VULGARE(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APSOY",
    "name": "ALLERGY SOYBEAN ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APSPI",
    "name": "ALLERGY SPINACH (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESTE",
    "name": "ALLERGY STEMPHYLIUM BOTRYOSUM(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESTO",
    "name": "ALLERGY STORAGE MITE (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESDU",
    "name": "ALLERGY STRAW DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APSTR",
    "name": "ALLERGY STRAWBERRY (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESUN",
    "name": "ALLERGY SUNFLOWER (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AESWE",
    "name": "ALLERGY SWEET POTATO (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETEA",
    "name": "ALLERGY TEA(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APTIM",
    "name": "ALLERGY TIMOTHY GRASS ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEPHL",
    "name": "ALLERGY TIMOTHY GRASS (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETOB",
    "name": "ALLERGY TOBBACO (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APTOM",
    "name": "ALLERGY TOMATO ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETOO",
    "name": "ALLERGY TOOR DAL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETRI",
    "name": "ALLERGY TRITICUM AESTIVUM (CULTIVATED WHEAT)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APTUN",
    "name": "ALLERGY TUNA (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APTUR",
    "name": "ALLERGY TURKEY MEAT (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETUR",
    "name": "ALLERGY TURMERIC (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AETYP",
    "name": "ALLERGY TYPHA LATIFOLIA (COMMON CATTAIL)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEUDA",
    "name": "ALLERGY UDAD DAL (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEWAL",
    "name": "ALLERGY WALNUT (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APWAL",
    "name": "ALLERGY WALNUT (BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEWAT",
    "name": "ALLERGY WATERMELON (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APWHE",
    "name": "ALLERGY WHEAT ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEWDU",
    "name": "ALLERGY WHEAT DUST(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEWOO",
    "name": "ALLERGY WOOD DUST (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEXAN",
    "name": "ALLERGY XANTHIUM COMMUNE (COCKLEBUR)(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "APYEA",
    "name": "ALLERGY YEAST ( BY PHADIA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEYOG",
    "name": "ALLERGY YOGURT (BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AEZEA",
    "name": "ALLERGY ZEA MAYS(BY ELISA)",
    "mrp": 1100,
    "category": "test"
  },
  {
    "code": "AFP-C",
    "name": "ALPHA FETO PROTEIN",
    "mrp": 865,
    "category": "test"
  },
  {
    "code": "ALHBD",
    "name": "ALPHA HYDROXYBUTYRATE DEHYDROGENASE",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "AAT",
    "name": "ALPHA-1-ANTITRYPSIN (AAT)",
    "mrp": 1425,
    "category": "test"
  },
  {
    "code": "BTEAL",
    "name": "ALUMINIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "AMP",
    "name": "AMPHETAMINE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "AMYL",
    "name": "AMYLASE",
    "mrp": 560,
    "category": "test"
  },
  {
    "code": "RIANA",
    "name": "ANA TITRE (IMMUNOFLUORESCENCE)",
    "mrp": 895,
    "category": "test"
  },
  {
    "code": "ANDR",
    "name": "ANDROSTENEDIONE (A4)",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "ANTCE",
    "name": "ANGIOTENSIN CONVERTING ENZYME",
    "mrp": 710,
    "category": "test"
  },
  {
    "code": "DNA",
    "name": "ANTI - DSDNA",
    "mrp": 890,
    "category": "test"
  },
  {
    "code": "ACCP",
    "name": "ANTI CCP (ACCP)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "CHL_G",
    "name": "ANTI CHLAMYDIA ANTIBODY IGG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CHL_M",
    "name": "ANTI CHLAMYDIA ANTIBODY IGM",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "DGP-A",
    "name": "ANTI DEAMIDATED GLIADIN PEPTIDE - IGA",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "DGP-G",
    "name": "ANTI DEAMIDATED GLIADIN PEPTIDE - IGG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "GBMG",
    "name": "ANTI GLOMERULAR BASEMENT MEMBRANE PROTEIN - IgG",
    "mrp": 2170,
    "category": "test"
  },
  {
    "code": "HAVM",
    "name": "ANTI HEPATITIS A VIRUS (ANTI HAV) - IGM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "HAVT",
    "name": "ANTI HEPATITIS A VIRUS (HAV) - TOTAL",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "HBCM",
    "name": "ANTI HEPATITIS B CORE ANTIGEN (AHBC) - IGM",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "HBCT",
    "name": "ANTI HEPATITIS B CORE ANTIGEN (AHBC) - TOTAL",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "AHCV",
    "name": "ANTI HEPATITIS C VIRUS (ANTI HCV) - TOTAL",
    "mrp": 1300,
    "category": "test"
  },
  {
    "code": "HEVM",
    "name": "ANTI HEPATITIS E VIRUS (Anti HEV) - IgM",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "AMH",
    "name": "ANTI MULLERIAN HORMONE (AMH)",
    "mrp": 2200,
    "category": "test"
  },
  {
    "code": "ANA",
    "name": "ANTI NUCLEAR ANTIBODIES (ANA)",
    "mrp": 880,
    "category": "test"
  },
  {
    "code": "APLG",
    "name": "ANTI PHOSPHOLIPID ANTIBODY (APL) - IGG",
    "mrp": 1020,
    "category": "test"
  },
  {
    "code": "APLM",
    "name": "ANTI PHOSPHOLIPID ANTIBODY (APL) - IGM",
    "mrp": 1020,
    "category": "test"
  },
  {
    "code": "ASCA",
    "name": "ANTI SACCHAROMYCES CEREVISIAE IGA ANTIBODIES",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "ASCG",
    "name": "ANTI SACCHAROMYCES CEREVISIAE IGG ANTIBODIES",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "SCL70",
    "name": "ANTI SCL - 70 ANTIBODY",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "ASAB",
    "name": "ANTI SPERM ANTIBODY (ASAB)",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "ASO",
    "name": "ANTI STREPTOLYSIN - O (ASO)",
    "mrp": 710,
    "category": "test"
  },
  {
    "code": "ATG",
    "name": "ANTI THYROGLOBULIN ANTIBODY (ATG)",
    "mrp": 1270,
    "category": "test"
  },
  {
    "code": "AMAT",
    "name": "Anti-Mitochondrial Antibody (AMA)",
    "mrp": 3800,
    "category": "test"
  },
  {
    "code": "APCA",
    "name": "Anti-Parietal Cell Antibody (APCA)",
    "mrp": 3400,
    "category": "test"
  },
  {
    "code": "ASMA",
    "name": "Anti-Smooth Muscle Antibody (ASMA)",
    "mrp": 2200,
    "category": "test"
  },
  {
    "code": "AMA",
    "name": "Anti-TPO antibody (Anti-Thyroid Peroxidase)",
    "mrp": 1345,
    "category": "test"
  },
  {
    "code": "BTESB",
    "name": "ANTIMONY",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "ANA17B",
    "name": "ANTINUCLEAR ANTIBODIES-17 BLOT",
    "mrp": 3735,
    "category": "test"
  },
  {
    "code": "APOA",
    "name": "APOLIPOPROTEIN - A1 (APO-A1)",
    "mrp": 650,
    "category": "test"
  },
  {
    "code": "APOB",
    "name": "APOLIPOPROTEIN - B (APO-B)",
    "mrp": 650,
    "category": "test"
  },
  {
    "code": "BTEAS",
    "name": "ARSENIC",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "SGOT",
    "name": "ASPARTATE AMINOTRANSFERASE (SGOT )",
    "mrp": 220,
    "category": "test",
    "name_bn": "এসজিওটি লিভার টেস্ট (AST / SGOT)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "AGMAG",
    "name": "ASPERGILLUS GALACTOMANNAN ANTIGEN",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "MIC13",
    "name": "AUTOCLAVE BIOLOGICAL GROWTH MONITORING",
    "mrp": 1030,
    "category": "test"
  },
  {
    "code": "BAR",
    "name": "BARBITURATES",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "BTEBA",
    "name": "BARIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "BEND",
    "name": "BENZODIAZEPINES",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "BTEBE",
    "name": "BERYLLIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "B2G1G",
    "name": "BETA 2 GLYCOPROTEIN 1 - IGG",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "B2G1M",
    "name": "BETA 2 GLYCOPROTEIN 1 - IGM",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "BHCG",
    "name": "BETA HCG",
    "mrp": 815,
    "category": "test"
  },
  {
    "code": "B2MIC",
    "name": "BETA2 MICROGLOBULIN",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "BICAR",
    "name": "BICARBONATE",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "BILT",
    "name": "BILIRUBIN - TOTAL",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "BILD",
    "name": "BILIRUBIN -DIRECT",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "BIORP",
    "name": "Biofire-Respiratory panel 2.1",
    "mrp": 16045,
    "category": "test"
  },
  {
    "code": "BTEBI",
    "name": "BISMUTH",
    "mrp": 1133,
    "category": "test"
  },
  {
    "code": "BKETO",
    "name": "BLOOD KETONE (D3HB)",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "UREA",
    "name": "BLOOD UREA",
    "mrp": 145,
    "category": "test"
  },
  {
    "code": "BUN",
    "name": "BLOOD UREA NITROGEN (BUN)",
    "mrp": 130,
    "category": "test"
  },
  {
    "code": "CPEP",
    "name": "C-PEPTIDE",
    "mrp": 1235,
    "category": "test"
  },
  {
    "code": "CRP",
    "name": "C-REACTIVE PROTEIN (CRP)",
    "mrp": 525,
    "category": "test",
    "name_bn": "সি-রিঅ্যাকটিভ প্রোটিন (CRP)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "C153",
    "name": "CA 15.3",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "C199",
    "name": "CA 19.9",
    "mrp": 1410,
    "category": "test"
  },
  {
    "code": "CA724",
    "name": "CA 72.4-GASTRIC CANCER MARKER",
    "mrp": 1600,
    "category": "test"
  },
  {
    "code": "C125",
    "name": "CA-125",
    "mrp": 1395,
    "category": "test"
  },
  {
    "code": "BTECD",
    "name": "CADMIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "BTECS",
    "name": "CAESIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "CALCT",
    "name": "CALCITONIN",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "CALC",
    "name": "CALCIUM",
    "mrp": 245,
    "category": "test"
  },
  {
    "code": "CARB",
    "name": "CARBAMAZEPINE / TEGRETOL",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "CEA",
    "name": "CARCINO EMBRYONIC ANTIGEN (CEA)",
    "mrp": 820,
    "category": "test"
  },
  {
    "code": "AC_A",
    "name": "CARDIOLIPIN ANTIBODY (ACL) - IgA",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "AC_M",
    "name": "CARDIOLIPIN ANTIBODY (ACL) - IGM",
    "mrp": 890,
    "category": "test"
  },
  {
    "code": "AC_G",
    "name": "CARDIOLIPIN ANTIBODY (ACL) -IGG",
    "mrp": 890,
    "category": "test"
  },
  {
    "code": "CERU",
    "name": "CERULOPLASMIN",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "CHI_M",
    "name": "CHIKUNGUNYA-IGM",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "CT-PCR",
    "name": "CHLAMYDIA TRACHOMATIS PCR",
    "mrp": 4190,
    "category": "test"
  },
  {
    "code": "CHL",
    "name": "CHLORIDE",
    "mrp": 255,
    "category": "test"
  },
  {
    "code": "CHOLI",
    "name": "CHOLINESTERASE",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "BTECR",
    "name": "CHROMIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "CGA",
    "name": "CHROMOGRANIN A",
    "mrp": 6055,
    "category": "test"
  },
  {
    "code": "BTECO",
    "name": "COBALT",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "COC",
    "name": "COCAINE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "C3",
    "name": "COMPLEMENT 3 (C3)",
    "mrp": 805,
    "category": "test"
  },
  {
    "code": "C4",
    "name": "COMPLEMENT 4 (C4)",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "BTECU",
    "name": "COPPER",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "CORT",
    "name": "CORTISOL",
    "mrp": 635,
    "category": "test"
  },
  {
    "code": "CORTE",
    "name": "CORTISOL SERUM (EVENING SAMPLE 4pm -8pm)",
    "mrp": 600,
    "category": "test"
  },
  {
    "code": "CORTM",
    "name": "CORTISOL SERUM (MORNING SAMPLE 6am -10am)",
    "mrp": 635,
    "category": "test"
  },
  {
    "code": "COTIN",
    "name": "COTININE",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CPK",
    "name": "Creatine Phosphokinase (CPK), Serum",
    "mrp": 375,
    "category": "test"
  },
  {
    "code": "CPKMB",
    "name": "Creatine Phosphokinase Muscle/Brain (CPK MB), Serum",
    "mrp": 365,
    "category": "test"
  },
  {
    "code": "SCRE",
    "name": "CREATININE - SERUM",
    "mrp": 220,
    "category": "test",
    "name_bn": "সিরাম ক্রিয়েটিনিন (Creatinine)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "CYST",
    "name": "CYSTATIN C",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "CCM_G",
    "name": "CYTOMEGALO VIRUS (CMV) - IgG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CCM_M",
    "name": "CYTOMEGALO VIRUS (CMV) - IgM",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "PIVKA",
    "name": "DCP - Decarboxy Prothrombin PIVKA II",
    "mrp": 3800,
    "category": "test"
  },
  {
    "code": "NS1",
    "name": "DENGUE NS1 ANTIGEN - ELISA",
    "mrp": 765,
    "category": "test"
  },
  {
    "code": "DG_G",
    "name": "DENGUE-IGG - ELISA",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "DG_M",
    "name": "DENGUE-IGM - ELISA",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "DHEA",
    "name": "DHEA - SULPHATE (DHEAS)",
    "mrp": 1165,
    "category": "test"
  },
  {
    "code": "DIGOX",
    "name": "DIGOXIN",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "DHT",
    "name": "DIHYDROTESTOSTERONE (DHT)",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "DCT",
    "name": "DIRECT COOMBS TEST",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "DREN",
    "name": "DIRECT RENIN",
    "mrp": 5290,
    "category": "test"
  },
  {
    "code": "ECH_G",
    "name": "ECHINOCOCCUS - IGG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "AME_G",
    "name": "ENTAMOEBA HISTOLYTICA - IGG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "EBVCG",
    "name": "EPSTEIN BARR VIRAL CAPSID ANTIGEN - IGG",
    "mrp": 1455,
    "category": "test"
  },
  {
    "code": "ESR",
    "name": "ERYTHROCYTE SEDIMENTATION RATE (ESR)",
    "mrp": 130,
    "category": "test",
    "name_bn": "ইএসআর রক্ত পরীক্ষা (ESR)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "ERYP",
    "name": "ERYTHROPOIETIN",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "E2",
    "name": "ESTRADIOL/OESTROGEN (E2)",
    "mrp": 650,
    "category": "test"
  },
  {
    "code": "ETHAN",
    "name": "ETHANOL",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "FBS",
    "name": "FASTING BLOOD SUGAR(GLUCOSE)",
    "mrp": 80,
    "category": "test",
    "name_bn": "ফাস্টিং ব্লাড সুগার (FBS)",
    "fasting": true,
    "params": 1,
    "popular": true
  },
  {
    "code": "FECAL",
    "name": "FECAL CALPROTECTIN (CLIA)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "FERR",
    "name": "FERRITIN",
    "mrp": 825,
    "category": "test",
    "name_bn": "সিরাম ফেরিটিন (Ferritin)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "FILAG",
    "name": "FILARIA ANTIGEN RAPID TEST",
    "mrp": 1455,
    "category": "test"
  },
  {
    "code": "FOLI",
    "name": "FOLATE",
    "mrp": 1300,
    "category": "test"
  },
  {
    "code": "FSH",
    "name": "FOLLICLE STIMULATING HORMONE (FSH)",
    "mrp": 580,
    "category": "test"
  },
  {
    "code": "FOODV",
    "name": "FOOD INTOLERANCE- Vegetarian Profile",
    "mrp": 9499,
    "category": "test"
  },
  {
    "code": "FPSA",
    "name": "FREE PSA",
    "mrp": 1430,
    "category": "test"
  },
  {
    "code": "FTES",
    "name": "FREE TESTOSTERONE",
    "mrp": 1725,
    "category": "test"
  },
  {
    "code": "FT4",
    "name": "FREE THYROXINE (FT4)",
    "mrp": 300,
    "category": "test"
  },
  {
    "code": "FT3",
    "name": "FREE TRIIODOTHYRONINE (FT3)",
    "mrp": 300,
    "category": "test"
  },
  {
    "code": "FRUCT",
    "name": "FRUCTOSAMINE",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "GGT",
    "name": "GAMMA GLUTAMYL TRANSFERASE (GGT)",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "GASTR",
    "name": "GASTRIN",
    "mrp": 840,
    "category": "test"
  },
  {
    "code": "DIPSI",
    "name": "Glucose Challenge Test (DIPSI test)",
    "mrp": 150,
    "category": "test"
  },
  {
    "code": "G6PD",
    "name": "GLUCOSE-6-PHOSPHATE DEHYDROGENASE",
    "mrp": 805,
    "category": "test"
  },
  {
    "code": "HGLOB",
    "name": "HAPTOGLOBIN",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "HBA",
    "name": "HbA1c",
    "mrp": 420,
    "category": "test",
    "name_bn": "এইচবিএ১সি ডায়াবেটিস পরীক্ষা (HbA1c)",
    "fasting": false,
    "params": 2,
    "popular": true
  },
  {
    "code": "HCHO",
    "name": "HDL CHOLESTEROL - DIRECT",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "HPYA",
    "name": "HELICOBACTER PYLORI - IgA",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "HPYG",
    "name": "HELICOBACTER PYLORI - IGG",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "HPYM",
    "name": "HELICOBACTER PYLORI - IGM",
    "mrp": 960,
    "category": "test"
  },
  {
    "code": "HPAGR",
    "name": "HELICOBACTER PYLORI ANTIGEN RAPID-STOOL",
    "mrp": 1500,
    "category": "test"
  },
  {
    "code": "HEMGN",
    "name": "HEMOGLOBIN",
    "mrp": 200,
    "category": "test"
  },
  {
    "code": "HAIGM",
    "name": "HEPATITIS A VIRUS ANTIBODY IGM(HAVM) RAPID TEST",
    "mrp": 535,
    "category": "test"
  },
  {
    "code": "HBCAB",
    "name": "HEPATITIS B CORE ANTIBODY RAPID TEST",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "HBEAG",
    "name": "HEPATITIS B ENEVELOPE ANTIGEN(HBEAG) RAPID TEST",
    "mrp": 535,
    "category": "test"
  },
  {
    "code": "AHBE",
    "name": "HEPATITIS B ENVELOPE ANTIBODY",
    "mrp": 960,
    "category": "test"
  },
  {
    "code": "HBEAB",
    "name": "HEPATITIS B ENVELOPE ANTIBODY RAPID TEST",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "EAG",
    "name": "HEPATITIS B ENVELOPE ANTIGEN (HBEAG)",
    "mrp": 1020,
    "category": "test"
  },
  {
    "code": "HBST",
    "name": "HEPATITIS B SURFACE ANTIBODY (ANTI-HBs)",
    "mrp": 1020,
    "category": "test"
  },
  {
    "code": "SAG",
    "name": "HEPATITIS B SURFACE ANTIGEN (HBSAG)",
    "mrp": 540,
    "category": "test"
  },
  {
    "code": "HBSAG",
    "name": "HEPATITIS B SURFACE ANTIGEN(HBSAG) RAPID TEST",
    "mrp": 555,
    "category": "test"
  },
  {
    "code": "HBVQL",
    "name": "HEPATITIS B VIRUS (HBV) QUALITATIVE PCR",
    "mrp": 3810,
    "category": "test"
  },
  {
    "code": "HBVQN",
    "name": "HEPATITIS B VIRUS (HBV) QUANTITATIVE PCR",
    "mrp": 7335,
    "category": "test"
  },
  {
    "code": "HCVAB",
    "name": "HEPATITIS C ANTIBODY(HCVAB) RAPID TEST",
    "mrp": 655,
    "category": "test"
  },
  {
    "code": "HCVG",
    "name": "HEPATITIS C VIRUS - IGG",
    "mrp": 480,
    "category": "test"
  },
  {
    "code": "HCVM",
    "name": "HEPATITIS C VIRUS - IGM",
    "mrp": 1150,
    "category": "test"
  },
  {
    "code": "HCVQL",
    "name": "HEPATITIS C VIRUS (HCV) QUALITATIVE PCR",
    "mrp": 3810,
    "category": "test"
  },
  {
    "code": "HCVQN",
    "name": "HEPATITIS C VIRUS (HCV) QUANTITATIVE PCR",
    "mrp": 7410,
    "category": "test"
  },
  {
    "code": "HEIGM",
    "name": "HEPATITIS E VIRUS ANTIBODY IGM(HEVM) RAPID TEST",
    "mrp": 535,
    "category": "test"
  },
  {
    "code": "HEVG",
    "name": "HEPATITIS E VIRUS IGG",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "HC_G",
    "name": "HERPES SIMPLEX VIRUS (HSV)-IgG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "HC_M",
    "name": "HERPES SIMPLEX VIRUS (HSV)-IgM",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CHS1G",
    "name": "HERPES SIMPLEX VIRUS I (HSV)-IGG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CHS1M",
    "name": "HERPES SIMPLEX VIRUS I (HSV)-IGM",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CHS2G",
    "name": "HERPES SIMPLEX VIRUS II (HSV)-IGG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CHS2M",
    "name": "HERPES SIMPLEX VIRUS II (HSV)-IGM",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "HSCRP",
    "name": "HIGH SENSITIVITY C-REACTIVE PROTEIN (HS-CRP)",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "HSTNI",
    "name": "HIGH SENSITIVITY TROPONIN I",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "WEST",
    "name": "HIV - WESTERN BLOT",
    "mrp": 3630,
    "category": "test"
  },
  {
    "code": "HIVE",
    "name": "HIV I and II",
    "mrp": 600,
    "category": "test"
  },
  {
    "code": "HIVQL",
    "name": "HIV-1, RNA QUALITATIVE PCR",
    "mrp": 2970,
    "category": "test"
  },
  {
    "code": "HIVQN",
    "name": "HIV-1, RNA QUANTITATIVE PCR",
    "mrp": 4505,
    "category": "test"
  },
  {
    "code": "HB27",
    "name": "HLA B27 FLOW CYTOMETRY",
    "mrp": 2255,
    "category": "test"
  },
  {
    "code": "HLA27",
    "name": "HLA B27 QUALITATIVE PCR",
    "mrp": 2370,
    "category": "test"
  },
  {
    "code": "HOMO",
    "name": "HOMOCYSTEINE",
    "mrp": 1060,
    "category": "test"
  },
  {
    "code": "HE4",
    "name": "HUMAN EPIDIDYMIS PROTEIN 4",
    "mrp": 3030,
    "category": "test"
  },
  {
    "code": "HGH",
    "name": "HUMAN GROWTH HORMONE (HGH)",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "IPF",
    "name": "IMMATURE PLATELET FRACTION ( IPF )",
    "mrp": 585,
    "category": "test"
  },
  {
    "code": "IGA",
    "name": "IMMUNOGLOBULIN A (IGA)",
    "mrp": 885,
    "category": "test"
  },
  {
    "code": "IGE",
    "name": "IMMUNOGLOBULIN E (IGE)",
    "mrp": 1400,
    "category": "test"
  },
  {
    "code": "IGG",
    "name": "IMMUNOGLOBULIN G (IGG)",
    "mrp": 885,
    "category": "test"
  },
  {
    "code": "IGM",
    "name": "IMMUNOGLOBULIN M (IGM)",
    "mrp": 885,
    "category": "test"
  },
  {
    "code": "IDCT",
    "name": "INDIRECT COOMBS TEST",
    "mrp": 690,
    "category": "test"
  },
  {
    "code": "INHIB",
    "name": "INHIBIN A",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "INSFA",
    "name": "INSULIN - FASTING",
    "mrp": 785,
    "category": "test"
  },
  {
    "code": "INSPP",
    "name": "INSULIN - PP",
    "mrp": 620,
    "category": "test"
  },
  {
    "code": "INSAB",
    "name": "INSULIN ANTIBODIES",
    "mrp": 1455,
    "category": "test"
  },
  {
    "code": "INGF1",
    "name": "INSULIN LIKE GROWTH FACTOR 1",
    "mrp": 960,
    "category": "test"
  },
  {
    "code": "PTH",
    "name": "INTACT PARATHYROID HORMONE (PTH)",
    "mrp": 1580,
    "category": "test"
  },
  {
    "code": "ITRL6",
    "name": "INTERLEUKIN-6",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "ICAL",
    "name": "IONIC CALCIUM",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "IRON",
    "name": "IRON",
    "mrp": 250,
    "category": "test"
  },
  {
    "code": "KALAZ",
    "name": "KALA AZAR ANTIBODY RAPID TEST",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "KAPLC",
    "name": "KAPPA LIGHT CHAIN",
    "mrp": 710,
    "category": "test"
  },
  {
    "code": "KETAM",
    "name": "KETAMINE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "LACTA",
    "name": "LACTATE",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "LDH",
    "name": "LACTATE DEHYDROGENASE (LDH)",
    "mrp": 390,
    "category": "test"
  },
  {
    "code": "LAMLC",
    "name": "LAMBDA LIGHT CHAIN",
    "mrp": 710,
    "category": "test"
  },
  {
    "code": "LDL",
    "name": "LDL CHOLESTEROL - DIRECT",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "CYT03",
    "name": "LE CELL - INLAB",
    "mrp": 2480,
    "category": "test"
  },
  {
    "code": "BTEPB",
    "name": "LEAD",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "LP_M",
    "name": "LEPTOSPIRA-IgM",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "LASE",
    "name": "LIPASE",
    "mrp": 660,
    "category": "test"
  },
  {
    "code": "LPA",
    "name": "Lipoprotein (a) [Lp(a)]",
    "mrp": 550,
    "category": "test"
  },
  {
    "code": "LITHI",
    "name": "LITHIUM",
    "mrp": 620,
    "category": "test"
  },
  {
    "code": "LKMA",
    "name": "Liver Kidney Microsomal (LKM) Antibody",
    "mrp": 2200,
    "category": "test"
  },
  {
    "code": "LKM1",
    "name": "LIVER KIDNEY MICROSOMES",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "PLA2",
    "name": "LP-PLA2",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "LH",
    "name": "LUTEINISING HORMONE (LH)",
    "mrp": 565,
    "category": "test"
  },
  {
    "code": "MG",
    "name": "MAGNESIUM",
    "mrp": 540,
    "category": "test"
  },
  {
    "code": "MAPAR",
    "name": "MALARIAL PARASITE",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "BTEMN",
    "name": "MANGANESE",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "MDM",
    "name": "MDMA / ECSTASY",
    "mrp": 535,
    "category": "test"
  },
  {
    "code": "MESLG",
    "name": "MEASLES ANTIBODY - IGG",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "MESLM",
    "name": "MEASLES ANTIBODY - IGM",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "BTEHG",
    "name": "MERCURY",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "METHD",
    "name": "METHADONE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "METPH",
    "name": "METHAMPHETAMINE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "MQL",
    "name": "METHAQUALONE",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "METHO",
    "name": "METHOTREXATE TEST",
    "mrp": 2940,
    "category": "test"
  },
  {
    "code": "BTEMO",
    "name": "MOLYBDENUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "MOP",
    "name": "MORPHINE",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "PANC",
    "name": "MPO - ANCA ( P - ANCA )",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "MUMPG",
    "name": "MUMPS ANTIBODY - IGG",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "MUMPM",
    "name": "MUMPS ANTIBODY - IGM",
    "mrp": 725,
    "category": "test"
  },
  {
    "code": "MG-PCR",
    "name": "MYCOPLASMA GENITALIUM PCR",
    "mrp": 4000,
    "category": "test"
  },
  {
    "code": "MYOGL",
    "name": "MYOGLOBIN",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "NABDG",
    "name": "N ACETYL BETA D GLUCOSAMINIDASE",
    "mrp": 480,
    "category": "test"
  },
  {
    "code": "NG-PCR",
    "name": "NEISSERIA GONORRHOEAE PCR",
    "mrp": 4190,
    "category": "test"
  },
  {
    "code": "NHEL",
    "name": "NEONATAL HEMOGLOBIN ELECTROPHORESIS",
    "mrp": 900,
    "category": "test"
  },
  {
    "code": "NTSH",
    "name": "NEONATAL THYROID STIMULATING HORMONE # (TSH)",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "BTENI",
    "name": "NICKEL",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "NIME",
    "name": "NICOTINE METABOLITES",
    "mrp": 2170,
    "category": "test"
  },
  {
    "code": "NPBNP",
    "name": "NT-PROBNP",
    "mrp": 1800,
    "category": "test"
  },
  {
    "code": "OPI",
    "name": "OPIATES",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "PHECY",
    "name": "PHENCYCLIDINE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "PHEBA",
    "name": "PHENOBARBITAL/GARDENAL SERUM",
    "mrp": 840,
    "category": "test"
  },
  {
    "code": "PHEN",
    "name": "PHENYTOIN / DILANTIN / EPTOIN",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "PHOS",
    "name": "PHOSPHOROUS",
    "mrp": 245,
    "category": "test"
  },
  {
    "code": "PLGF",
    "name": "PLACENTAL GROWTH FACTOR",
    "mrp": 2350,
    "category": "test"
  },
  {
    "code": "PLTCT",
    "name": "PLATELET COUNT",
    "mrp": 305,
    "category": "test"
  },
  {
    "code": "PPBS",
    "name": "POSTPRANDIAL BLOOD SUGAR(GLUCOSE)",
    "mrp": 90,
    "category": "test",
    "name_bn": "পিপি ব্লাড সুগার (PPBS)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "POT",
    "name": "POTASSIUM",
    "mrp": 220,
    "category": "test"
  },
  {
    "code": "CANC",
    "name": "PR3 - ANCA ( C-ANCA )",
    "mrp": 1430,
    "category": "test"
  },
  {
    "code": "PALB",
    "name": "PREALBUMIN",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "PAPPA-C",
    "name": "PREGNANCY ASSOCIATED PLASMA PROTEIN A",
    "mrp": 1525,
    "category": "test"
  },
  {
    "code": "PRCAL",
    "name": "PROCALCITONIN",
    "mrp": 1525,
    "category": "test"
  },
  {
    "code": "PROG",
    "name": "PROGESTERONE",
    "mrp": 680,
    "category": "test"
  },
  {
    "code": "PRL",
    "name": "PROLACTIN (PRL)",
    "mrp": 600,
    "category": "test"
  },
  {
    "code": "PROPO",
    "name": "PROPOXYPHENE",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "PSA",
    "name": "PROSTATE SPECIFIC ANTIGEN (PSA)",
    "mrp": 655,
    "category": "test"
  },
  {
    "code": "PROT",
    "name": "PROTEIN - TOTAL",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "PREL",
    "name": "PROTEIN ELECTROPHORESIS",
    "mrp": 940,
    "category": "test"
  },
  {
    "code": "PYRUV",
    "name": "PYRUVATE",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "RBS",
    "name": "RANDOM BLOOD SUGAR(GLUCOSE)",
    "mrp": 85,
    "category": "test"
  },
  {
    "code": "RETIC",
    "name": "RETICULOCYTE COUNT (%)",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "RFAC",
    "name": "RHEUMATOID FACTOR (RF)",
    "mrp": 665,
    "category": "test"
  },
  {
    "code": "CRB_G",
    "name": "RUBELLA - IgG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CRB_M",
    "name": "RUBELLA - IgM",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "BTESE",
    "name": "SELENIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "SAAP",
    "name": "SERUM AMYLOID A PROTEIN",
    "mrp": 710,
    "category": "test"
  },
  {
    "code": "SECU",
    "name": "SERUM COPPER",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "SEGB",
    "name": "SERUM GLOBULIN",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "SEZN",
    "name": "SERUM ZINC",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "SHBG",
    "name": "SEX HORMONE BINDING GLOBULIN (SHBG)",
    "mrp": 1230,
    "category": "test"
  },
  {
    "code": "SIALA",
    "name": "SIALIC ACID",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "SICKL",
    "name": "SICKLE CELL TEST",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CYT04",
    "name": "Sickle cells in Blood by Light microscopy - INLAB",
    "mrp": 2480,
    "category": "test"
  },
  {
    "code": "BTEAG",
    "name": "SILVER",
    "mrp": 1185,
    "category": "test"
  },
  {
    "code": "SMITH",
    "name": "SM (SMITH) ANTIBODY, IGG",
    "mrp": 1120,
    "category": "test"
  },
  {
    "code": "SDLDL",
    "name": "SMALL DENSE LDL",
    "mrp": 550,
    "category": "test"
  },
  {
    "code": "SOD",
    "name": "SODIUM",
    "mrp": 245,
    "category": "test"
  },
  {
    "code": "SFLT1",
    "name": "SOLUBLE FMS-LIKE TYROSINE KINASE 1",
    "mrp": 2135,
    "category": "test"
  },
  {
    "code": "MIC08",
    "name": "STOOL HANGING DROP",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "SOBT",
    "name": "STOOL OCCULT BLOOD TEST",
    "mrp": 323,
    "category": "test"
  },
  {
    "code": "MIC07",
    "name": "STOOL ROUTINE AND MICROSCOPY",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "BTESR",
    "name": "STRONTIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "SYPHI",
    "name": "SYPHILIS RAPID TEST",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "TACR",
    "name": "TACROLIMUS ASSAY",
    "mrp": 3500,
    "category": "test"
  },
  {
    "code": "TEST",
    "name": "TESTOSTERONE",
    "mrp": 735,
    "category": "test"
  },
  {
    "code": "THCB",
    "name": "TETRAHYDROCANNABINOL",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "BTETL",
    "name": "THALLIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "WELG2",
    "name": "Thyro GeneMap",
    "mrp": 15999,
    "category": "test"
  },
  {
    "code": "TG",
    "name": "THYROGLOBULIN (TG)",
    "mrp": 1395,
    "category": "test"
  },
  {
    "code": "BTESN",
    "name": "TIN",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "TTGA",
    "name": "TISSUE TRANSGLUTAMINASE - IGA (TTG)",
    "mrp": 1430,
    "category": "test"
  },
  {
    "code": "TTGAA",
    "name": "TISSUE TRANSGLUTAMINASE (TTG) ANTIBODY, IGA (CLIA)",
    "mrp": 1495,
    "category": "test"
  },
  {
    "code": "TBILA",
    "name": "TOTAL BILE ACID",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "CHOL",
    "name": "TOTAL CHOLESTEROL",
    "mrp": 245,
    "category": "test"
  },
  {
    "code": "TIGE",
    "name": "TOTAL IGE",
    "mrp": 935,
    "category": "test"
  },
  {
    "code": "TIBC",
    "name": "TOTAL IRON BINDING CAPACITY (TIBC)",
    "mrp": 390,
    "category": "test"
  },
  {
    "code": "TLEUC",
    "name": "TOTAL LEUCOCYTES COUNT",
    "mrp": 225,
    "category": "test"
  },
  {
    "code": "TORBC",
    "name": "TOTAL RBC",
    "mrp": 225,
    "category": "test"
  },
  {
    "code": "T4",
    "name": "TOTAL THYROXINE (T4)",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "T3",
    "name": "TOTAL TRIIODOTHYRONINE (T3)",
    "mrp": 230,
    "category": "test"
  },
  {
    "code": "CTX_G",
    "name": "TOXO GONDII - IgG",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "CTX_M",
    "name": "TOXO GONDII - IgM",
    "mrp": 455,
    "category": "test"
  },
  {
    "code": "TRANS",
    "name": "TRANSFERRIN SERUM",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "TPAB",
    "name": "TREPONEMA PALLIDUM ANTIBODY (TPAB)",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "TPHA",
    "name": "TREPONEMA PALLIDUM HAEMAGGLUTINATION",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "TV-PCR",
    "name": "TRICHOMONAS VAGINALIS PCR",
    "mrp": 4000,
    "category": "test"
  },
  {
    "code": "TRIG",
    "name": "TRIGLYCERIDES",
    "mrp": 235,
    "category": "test"
  },
  {
    "code": "ACTNI",
    "name": "TROPONIN I HEART ATTACK RISK",
    "mrp": 1905,
    "category": "test"
  },
  {
    "code": "TROPO",
    "name": "TROPONIN I RAPID TEST",
    "mrp": 605,
    "category": "test"
  },
  {
    "code": "USTSH",
    "name": "TSH - ULTRASENSITIVE",
    "mrp": 260,
    "category": "test",
    "name_bn": "থাইরয়েড আল্ট্রা-সেনসিটিভ টিএসএইচ (TSH)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "TRAB",
    "name": "TSH RECEPTOR ANTIBODIES",
    "mrp": 1455,
    "category": "test"
  },
  {
    "code": "E3-C",
    "name": "UNCONJUGATED ESTRIOL - uE3",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "BTEU",
    "name": "URANIUM",
    "mrp": 1133,
    "category": "test"
  },
  {
    "code": "URIC",
    "name": "URIC ACID",
    "mrp": 210,
    "category": "test",
    "name_bn": "ইউরিক অ্যাসিড (Uric Acid)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "UCORT",
    "name": "URINARY CORTISOL (24 Hours urine)",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "UALB",
    "name": "URINARY MICROALBUMIN",
    "mrp": 550,
    "category": "test"
  },
  {
    "code": "MIC01",
    "name": "URINE CULTURE AND SUSCEPTIBILITY",
    "mrp": 945,
    "category": "test"
  },
  {
    "code": "UPTR",
    "name": "URINE PREGNANCY RAPID TEST",
    "mrp": 240,
    "category": "test"
  },
  {
    "code": "VALP",
    "name": "VALPROIC ACID",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "BTEV",
    "name": "VANADIUM",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VAZVG",
    "name": "VARICELLA ZOSTER VIRUS ANTIBODY - IGG",
    "mrp": 840,
    "category": "test"
  },
  {
    "code": "VAZVM",
    "name": "VARICELLA ZOSTER VIRUS ANTIBODY - IGM",
    "mrp": 840,
    "category": "test"
  },
  {
    "code": "VDRL",
    "name": "VDRL (RPR) FOR SYPHILIS",
    "mrp": 250,
    "category": "test"
  },
  {
    "code": "VITA",
    "name": "VITAMIN A",
    "mrp": 2455,
    "category": "test"
  },
  {
    "code": "VITB",
    "name": "VITAMIN B-12",
    "mrp": 1090,
    "category": "test",
    "name_bn": "ভিটামিন বি-১২ (Vitamin B12)",
    "fasting": false,
    "params": 1,
    "popular": true
  },
  {
    "code": "VITB1",
    "name": "VITAMIN B1/THIAMIN",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VITB2",
    "name": "VITAMIN B2/RIBOFLAVIN",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VITB3",
    "name": "VITAMIN B3/NICOTINIC ACID",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VITB5",
    "name": "VITAMIN B5/PANTOTHENIC",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VITB6",
    "name": "VITAMIN B6/PYRIDOXAL - 5 - PHOSPHATE",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VITB7",
    "name": "VITAMIN B7/BIOTIN",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VITB9",
    "name": "VITAMIN B9/FOLIC ACID",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "VD125",
    "name": "VITAMIN D 1,25 - DIHYDROXY",
    "mrp": 3030,
    "category": "test"
  },
  {
    "code": "VITD3",
    "name": "VITAMIN D3",
    "mrp": 2499,
    "category": "test"
  },
  {
    "code": "VITE",
    "name": "VITAMIN E",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "VITK",
    "name": "VITAMIN K",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "BTEZN",
    "name": "ZINC",
    "mrp": 1205,
    "category": "test"
  },
  {
    "code": "SNL54",
    "name": "5-FU GENOTYPING AND TOXICITY TEST (PHARMACOGENOMICS) - (Outlab)",
    "mrp": 4425,
    "category": "test"
  },
  {
    "code": "AM325",
    "name": "Acid Fast Bacilli (AFB) Reflex with MOTT and MTB differentiation - (Outlab)",
    "mrp": 2200,
    "category": "test"
  },
  {
    "code": "AM150",
    "name": "Activated Protein C Resistance (APCR) - (Outlab)",
    "mrp": 4840,
    "category": "test"
  },
  {
    "code": "KH107",
    "name": "Acute Leukemia Comprehensive Panel - (Outlab)",
    "mrp": 34610,
    "category": "test"
  },
  {
    "code": "CYT20",
    "name": "ADENOSINE DEAMINASE ADA-ASCITIC FLUID - INLAB",
    "mrp": 3115,
    "category": "test"
  },
  {
    "code": "CYT21",
    "name": "ADENOSINE DEAMINASE ADA-CSF - INLAB",
    "mrp": 3115,
    "category": "test"
  },
  {
    "code": "CYT22",
    "name": "ADENOSINE DEAMINASE ADA-FLUID - INLAB",
    "mrp": 3115,
    "category": "test"
  },
  {
    "code": "AM081",
    "name": "Adrenaline (Epinephrine) Urine - (Outlab)",
    "mrp": 3960,
    "category": "test"
  },
  {
    "code": "TB007",
    "name": "AFB CULTURE (MGIT)",
    "mrp": 1630,
    "category": "test"
  },
  {
    "code": "TB013",
    "name": "AFB DRUG SUSCEPTIBILITY - MOTT",
    "mrp": 5560,
    "category": "test"
  },
  {
    "code": "AFB01",
    "name": "AFB DRUG SUSCEPTIBILITY (13 DRUGS)",
    "mrp": 8954,
    "category": "test"
  },
  {
    "code": "ME2441",
    "name": "AML Multiplex Basic Reflex to FLT3-ITD Allelic Ratio - (Outlab)",
    "mrp": 18015,
    "category": "test"
  },
  {
    "code": "SNL36",
    "name": "AML1/ETO (AML - M2) - (Outlab)",
    "mrp": 5415,
    "category": "test"
  },
  {
    "code": "SNL26",
    "name": "AMNIOTIC FLUID FOR KARYOTYPING - (Outlab)",
    "mrp": 11245,
    "category": "test"
  },
  {
    "code": "AM083",
    "name": "Amylase - Fluid - (Outlab)",
    "mrp": 550,
    "category": "test"
  },
  {
    "code": "CG009",
    "name": "ANEUPLOIDY FISH (13,18,21,X & Y) - (Outlab)",
    "mrp": 8630,
    "category": "test"
  },
  {
    "code": "AM086",
    "name": "Aneuploidy Panel By FISH - (Outlab)",
    "mrp": 12100,
    "category": "test"
  },
  {
    "code": "AM087",
    "name": "Aneuploidy Panel By Karyotyping - (Outlab)",
    "mrp": 13200,
    "category": "test"
  },
  {
    "code": "AM094",
    "name": "Anti Transglutaminase IgG Antibody - (Outlab)",
    "mrp": 1710,
    "category": "test"
  },
  {
    "code": "TB014",
    "name": "ANTIBIOGRAM - MTB (AMIKACIN)",
    "mrp": 1620,
    "category": "test"
  },
  {
    "code": "TB015",
    "name": "ANTIBIOGRAM - MTB (CAPREOMYCIN)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "TB016",
    "name": "ANTIBIOGRAM - MTB (CLOFAZIMINE)",
    "mrp": 1705,
    "category": "test"
  },
  {
    "code": "TB017",
    "name": "ANTIBIOGRAM - MTB (ETHAMBUTOL)",
    "mrp": 1820,
    "category": "test"
  },
  {
    "code": "TB018",
    "name": "ANTIBIOGRAM - MTB (ETHIONAMIDE)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "TB029",
    "name": "ANTIBIOGRAM - MTB (ISONIAZID)",
    "mrp": 1820,
    "category": "test"
  },
  {
    "code": "TB019",
    "name": "ANTIBIOGRAM - MTB (KANAMYCIN)",
    "mrp": 1655,
    "category": "test"
  },
  {
    "code": "TB020",
    "name": "ANTIBIOGRAM - MTB (LINEZOLID)",
    "mrp": 2035,
    "category": "test"
  },
  {
    "code": "TB022",
    "name": "ANTIBIOGRAM - MTB (MOXIFLOXACIN HIGHER DOSE)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "TB021",
    "name": "ANTIBIOGRAM - MTB (MOXIFLOXACIN)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "TB023",
    "name": "ANTIBIOGRAM - MTB (OFLOXACIN)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "TB024",
    "name": "ANTIBIOGRAM - MTB (PAS)",
    "mrp": 1705,
    "category": "test"
  },
  {
    "code": "TB025",
    "name": "ANTIBIOGRAM - MTB (PYRAZINAMIDE)",
    "mrp": 2035,
    "category": "test"
  },
  {
    "code": "TB026",
    "name": "ANTIBIOGRAM - MTB (RIFABUTIN)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "TB027",
    "name": "ANTIBIOGRAM - MTB (RIFAMPICIN)",
    "mrp": 1820,
    "category": "test"
  },
  {
    "code": "TB028",
    "name": "ANTIBIOGRAM - MTB (STREPTOMYCIN)",
    "mrp": 1550,
    "category": "test"
  },
  {
    "code": "AM096",
    "name": "Arsenic Urine - Spot - (Outlab)",
    "mrp": 3300,
    "category": "test"
  },
  {
    "code": "CYT27",
    "name": "Ascitic fluid analysis with ADA - INLAB",
    "mrp": 4655,
    "category": "test"
  },
  {
    "code": "CYT28",
    "name": "Ascitic fluid analysis with AFB - INLAB",
    "mrp": 2480,
    "category": "test"
  },
  {
    "code": "CYT29",
    "name": "Ascitic fluid analysis with AFB and ADA - INLAB",
    "mrp": 4915,
    "category": "test"
  },
  {
    "code": "CYT16",
    "name": "Ascitic fluid cytology - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "AM031",
    "name": "Aspergillus Antibody IgG - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM032",
    "name": "Aspergillus Antibody IgM - (Outlab)",
    "mrp": 3850,
    "category": "test"
  },
  {
    "code": "AM098",
    "name": "AutoHep Panel I - (Outlab)",
    "mrp": 6820,
    "category": "test"
  },
  {
    "code": "AM099",
    "name": "AutoHep Panel II - (Outlab)",
    "mrp": 7700,
    "category": "test"
  },
  {
    "code": "AM046",
    "name": "B-type Natriuretic Peptide (BNP) - (Outlab)",
    "mrp": 4400,
    "category": "test"
  },
  {
    "code": "MIC09",
    "name": "BACTERIAL LATEX AGGLUTINATION",
    "mrp": 1785,
    "category": "test"
  },
  {
    "code": "AM004",
    "name": "BCR ABL gene translocation (Quantitative) - (Outlab)",
    "mrp": 7700,
    "category": "test"
  },
  {
    "code": "SNL34",
    "name": "BCR/ABL (CML, AML, ALL) - (Outlab)",
    "mrp": 4472,
    "category": "test"
  },
  {
    "code": "SNL63",
    "name": "BCR/ABL QUALITATIVE (MBCR-CML) - (Outlab)",
    "mrp": 5104,
    "category": "test"
  },
  {
    "code": "SNL64",
    "name": "BCR/ABL QUANTITATIVE (MBCR-CML) - (Outlab)",
    "mrp": 6237,
    "category": "test"
  },
  {
    "code": "DNA13",
    "name": "BENCE JONES PROTEIN - (Outlab)",
    "mrp": 902,
    "category": "test"
  },
  {
    "code": "AM333",
    "name": "Beta 2 glycoprotein 1 IgA - (Outlab)",
    "mrp": 1540,
    "category": "test"
  },
  {
    "code": "AM152",
    "name": "Beta 2 Microglobulin - Urine - (Outlab)",
    "mrp": 2200,
    "category": "test"
  },
  {
    "code": "LIHBD",
    "name": "Beta-Thalassemia Sequencing (2 Parents) - (Outlab)",
    "mrp": 13240,
    "category": "test"
  },
  {
    "code": "LIBTH",
    "name": "Beta-Thalassemia Sequencing (Adult- Individual) - (Outlab)",
    "mrp": 7870,
    "category": "test"
  },
  {
    "code": "BIOPP",
    "name": "Biofire-Pneumonia plus panel",
    "mrp": 19999,
    "category": "test"
  },
  {
    "code": "MIC05",
    "name": "BLOOD CULTURE AND SUSCEPTIBILITY (ADULT)",
    "mrp": 800,
    "category": "test"
  },
  {
    "code": "MIC04",
    "name": "BLOOD CULTURE AND SUSCEPTIBILITY (PEDIATRIC)",
    "mrp": 800,
    "category": "test"
  },
  {
    "code": "CG020",
    "name": "BLOOD KARYOTYPE WITH VARIANTS - (Outlab)",
    "mrp": 5040,
    "category": "test"
  },
  {
    "code": "CYT19",
    "name": "BODY FLUID MICROSCOPY CSF or ASCITIC FLUID - INLAB",
    "mrp": 1585,
    "category": "test"
  },
  {
    "code": "SNL25",
    "name": "BONE MARROW FOR KARYOTYPING - (Outlab)",
    "mrp": 4075,
    "category": "test"
  },
  {
    "code": "CG022",
    "name": "BONE MARROW KARYOTYPING - (Outlab)",
    "mrp": 9860,
    "category": "test"
  },
  {
    "code": "CYT01",
    "name": "Bone marrow smear - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "AM103",
    "name": "BRCA 1 and 2 Full Gene Sequencing (with Sanger validation) - (Outlab)",
    "mrp": 24200,
    "category": "test"
  },
  {
    "code": "KH108",
    "name": "BRCA 1/2 Somatic & Germline NGS - (Outlab)",
    "mrp": 61625,
    "category": "test"
  },
  {
    "code": "NA1031",
    "name": "BRCA1&2Comprehensive Panel(Full gene +Del/Dup) - (Outlab)",
    "mrp": 45015,
    "category": "test"
  },
  {
    "code": "AM155",
    "name": "Bronchial Washing Analysis - (Outlab)",
    "mrp": 1270,
    "category": "test"
  },
  {
    "code": "AM013",
    "name": "Brucella IgG Antibodies - (Outlab)",
    "mrp": 1540,
    "category": "test"
  },
  {
    "code": "AM014",
    "name": "Brucella IgM Antibodies - (Outlab)",
    "mrp": 1490,
    "category": "test"
  },
  {
    "code": "SNL38",
    "name": "C MYC (ALL, NHL) - (Outlab)",
    "mrp": 5415,
    "category": "test"
  },
  {
    "code": "AM105",
    "name": "C-Peptide Post Prandial - Serum - (Outlab)",
    "mrp": 1430,
    "category": "test"
  },
  {
    "code": "AM106",
    "name": "Calcium (Total) - 24 Hrs Urine - (Outlab)",
    "mrp": 290,
    "category": "test"
  },
  {
    "code": "AM107",
    "name": "Calcium (Total) - Random Urine - (Outlab)",
    "mrp": 530,
    "category": "test"
  },
  {
    "code": "MMG01",
    "name": "CardioMap - (Outlab)",
    "mrp": 7450,
    "category": "test"
  },
  {
    "code": "AM108",
    "name": "Chloride (Cl-) 24 Hrs Urine - (Outlab)",
    "mrp": 310,
    "category": "test"
  },
  {
    "code": "AM109",
    "name": "Chloride (Cl-) CSF - (Outlab)",
    "mrp": 290,
    "category": "test"
  },
  {
    "code": "SNL27",
    "name": "CHORIONIC VILLUS SAMPLE FOR KARYOTYPING - (Outlab)",
    "mrp": 10430,
    "category": "test"
  },
  {
    "code": "SNL41",
    "name": "CHQ 13Q (MM, CLL) - (Outlab)",
    "mrp": 5415,
    "category": "test"
  },
  {
    "code": "AM157",
    "name": "Chromium - 24 Hours Urine - (Outlab)",
    "mrp": 3850,
    "category": "test"
  },
  {
    "code": "SNL44",
    "name": "CHROMOSOME 13 & 21 - (Outlab)",
    "mrp": 8265,
    "category": "test"
  },
  {
    "code": "SNL43",
    "name": "CHROMOSOME 13, 18, 21, X & Y - (Outlab)",
    "mrp": 11567,
    "category": "test"
  },
  {
    "code": "SNL45",
    "name": "CHROMOSOME 18, X & Y (AMNIOTIC FLUID) - (Outlab)",
    "mrp": 7515,
    "category": "test"
  },
  {
    "code": "SNL42",
    "name": "CHROMOSOME 21 - (Outlab)",
    "mrp": 7442,
    "category": "test"
  },
  {
    "code": "AM158",
    "name": "Chromosome Analysis - (Outlab)",
    "mrp": 4620,
    "category": "test"
  },
  {
    "code": "CG017",
    "name": "CHROMOSOME BREAKAGE STUDY FOR ATAXIA TELANGIECTASIA - (Outlab)",
    "mrp": 12760,
    "category": "test"
  },
  {
    "code": "CG019",
    "name": "CHROMOSOME BREAKAGE STUDY FOR BLOOM'S/COCKAYNE SYNDROME - (Outlab)",
    "mrp": 11790,
    "category": "test"
  },
  {
    "code": "CG018",
    "name": "CHROMOSOME BREAKAGE STUDY FOR FANCONI'S ANEMIA - (Outlab)",
    "mrp": 12610,
    "category": "test"
  },
  {
    "code": "SNL29",
    "name": "CHROMOSOME BREAKAGE SYNDROME - (Outlab)",
    "mrp": 8265,
    "category": "test"
  },
  {
    "code": "SNM244",
    "name": "Clinical Exome sequencing - (Outlab)",
    "mrp": 27015,
    "category": "test"
  },
  {
    "code": "LICXS",
    "name": "Clinical Exome Sequencing Peripheral blood - (Outlab)",
    "mrp": 34660,
    "category": "test"
  },
  {
    "code": "P00288",
    "name": "CLL comprehensive Panel - (Outlab)",
    "mrp": 18065,
    "category": "test"
  },
  {
    "code": "AM159",
    "name": "CLPD (Chronic Lymphoproliferative Disorder) Comprehensive Panel - (Outlab)",
    "mrp": 16500,
    "category": "test"
  },
  {
    "code": "SNL10",
    "name": "CMV QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 1815,
    "category": "test"
  },
  {
    "code": "P00434",
    "name": "ColoCORE Panel 3 - (Outlab)",
    "mrp": 21335,
    "category": "test"
  },
  {
    "code": "AM009",
    "name": "Copper - 24 hrs Urine - (Outlab)",
    "mrp": 2310,
    "category": "test"
  },
  {
    "code": "P00100",
    "name": "COREprime Lung Panel 2 - (Outlab)",
    "mrp": 31515,
    "category": "test"
  },
  {
    "code": "AM115",
    "name": "Couple Karyotyping - (Female and Male) - (Outlab)",
    "mrp": 7150,
    "category": "test"
  },
  {
    "code": "COVID-19",
    "name": "COVID-19",
    "mrp": 525,
    "category": "test"
  },
  {
    "code": "AM112",
    "name": "Creatinine Clearance Test - (Outlab)",
    "mrp": 550,
    "category": "test"
  },
  {
    "code": "AM161",
    "name": "Cryoglobulin (Qualitative) - (Outlab)",
    "mrp": 1270,
    "category": "test"
  },
  {
    "code": "MIC10",
    "name": "CRYPTOCOCCUS LATEX AGGLUTINATION",
    "mrp": 884,
    "category": "test"
  },
  {
    "code": "CYT23",
    "name": "CSF FLUID ANALYSIS MICROSCOPY - INLAB",
    "mrp": 1585,
    "category": "test"
  },
  {
    "code": "MIC11",
    "name": "CSF ROUTINE ANALYSIS",
    "mrp": 334,
    "category": "test"
  },
  {
    "code": "AM059",
    "name": "Cyclosporine (by CLIA) - (Outlab)",
    "mrp": 3410,
    "category": "test"
  },
  {
    "code": "AM163",
    "name": "Cystic Fibrosis Mutation Detection - (Outlab)",
    "mrp": 14300,
    "category": "test"
  },
  {
    "code": "DGL01",
    "name": "DGL01 - (Outlab)",
    "mrp": 960,
    "category": "test"
  },
  {
    "code": "LIDOU",
    "name": "DOUBLE MARKER (AUTODELFIA) FIRST TRIMESTER - OUTLAB - (Outlab)",
    "mrp": 2705,
    "category": "test"
  },
  {
    "code": "P00047",
    "name": "Double/Triple Hit Lymphoma (Solid Tumor) - (Outlab)",
    "mrp": 17452,
    "category": "test"
  },
  {
    "code": "LIDMD",
    "name": "Duchenne Muscular Dystrophy For MLPA - (Outlab)",
    "mrp": 16870,
    "category": "test"
  },
  {
    "code": "KH101",
    "name": "EGFR (Exon 18-21) Sequencing - (Outlab)",
    "mrp": 17300,
    "category": "test"
  },
  {
    "code": "KH103",
    "name": "EGFR Multiplex Realtime PCR - (Outlab)",
    "mrp": 24470,
    "category": "test"
  },
  {
    "code": "YB1157",
    "name": "Ewings Sarcoma /EWSR1 Gene Rearrangement (22q12) for Ewing Sarcoma - (Outlab)",
    "mrp": 9015,
    "category": "test"
  },
  {
    "code": "LIENS",
    "name": "Expanded Newborn Screening Panel - 7 Disorders and Tandem Mass Spectrometry - (Outlab)",
    "mrp": 8080,
    "category": "test"
  },
  {
    "code": "LINTH",
    "name": "Expanded Newborn Screening Panel - 7 Disorders and TMS and Hemoglobinopathies - (Outlab)",
    "mrp": 9580,
    "category": "test"
  },
  {
    "code": "HIS07",
    "name": "EXTRA-LARGE BIOPSY TISSUE SIZE ABOVE 6CM - INLAB",
    "mrp": 3699,
    "category": "test"
  },
  {
    "code": "AM020",
    "name": "Factor - II (Prothrombin) mutation detection - (Outlab)",
    "mrp": 7150,
    "category": "test"
  },
  {
    "code": "AM015",
    "name": "Factor - V (Leiden Mutation) - (Outlab)",
    "mrp": 6820,
    "category": "test"
  },
  {
    "code": "AM016",
    "name": "Factor IX (Anti-Hemophilia B) Activity - (Outlab)",
    "mrp": 2310,
    "category": "test"
  },
  {
    "code": "AM017",
    "name": "Factor VIII (Anti-Hemophilia A) Activity - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM018",
    "name": "Factor X (Stuart Prower) Factor functional activity - (Outlab)",
    "mrp": 5610,
    "category": "test"
  },
  {
    "code": "AM019",
    "name": "Factor XI (Rosenthal) Functional Activity - (Outlab)",
    "mrp": 4180,
    "category": "test"
  },
  {
    "code": "KH100",
    "name": "FGFR1 by FISH - (Outlab)",
    "mrp": 12360,
    "category": "test"
  },
  {
    "code": "AM167",
    "name": "Filaria Antibody - Serum - (Outlab)",
    "mrp": 1650,
    "category": "test"
  },
  {
    "code": "CYT05",
    "name": "Fine Needle Aspiration Cytology - INLAB",
    "mrp": 1585,
    "category": "test"
  },
  {
    "code": "CG014",
    "name": "FISH - AMLI/ETO IN AML M2 - (Outlab)",
    "mrp": 4631,
    "category": "test"
  },
  {
    "code": "CG012",
    "name": "FISH - BCR-ABL FOR CML/AML/ALL - (Outlab)",
    "mrp": 5290,
    "category": "test"
  },
  {
    "code": "CG008",
    "name": "FISH - CHROMOSOME 13/21 - (Outlab)",
    "mrp": 6061,
    "category": "test"
  },
  {
    "code": "CG007",
    "name": "FISH - CHROMOSOME 18/X/Y - (Outlab)",
    "mrp": 5880,
    "category": "test"
  },
  {
    "code": "CG006",
    "name": "FISH - FOR SEX CHROMOSOME ANOMALIES - (Outlab)",
    "mrp": 6050,
    "category": "test"
  },
  {
    "code": "CG013",
    "name": "FISH - PML/RARA IN APML - (Outlab)",
    "mrp": 4500,
    "category": "test"
  },
  {
    "code": "CG005",
    "name": "FISH - DOWN'S SYNDROME - (Outlab)",
    "mrp": 6480,
    "category": "test"
  },
  {
    "code": "CG063",
    "name": "FISH FOR 1P LOSS/DELETION AND 1Q GAIN /AMPLIFICATION - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "AM169",
    "name": "FISH for 1p-19q co deletion - (Outlab)",
    "mrp": 12650,
    "category": "test"
  },
  {
    "code": "CG024",
    "name": "FISH FOR ANGELMAN SYNDROME - (Outlab)",
    "mrp": 6446,
    "category": "test"
  },
  {
    "code": "CG033",
    "name": "FISH FOR ANY ONE MICRODELETION SYNDROME WITH KARYOTYPING - (Outlab)",
    "mrp": 8610,
    "category": "test"
  },
  {
    "code": "CG054",
    "name": "FISH FOR BCL2 (NON HODGKINS LYMPHOMA NHL) - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG064",
    "name": "FISH FOR BCL6 BREAKAPART REARRANGEMENT - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG043",
    "name": "FISH FOR BCR-ABL/PHILADELPHIA OR PH CHROMOSOME/T(9;22) FOR ALL - (Outlab)",
    "mrp": 5230,
    "category": "test"
  },
  {
    "code": "CG067",
    "name": "FISH FOR BRAF/7Q34 - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG046",
    "name": "FISH FOR BURKITT'S LYMPHOMA / (8Q24) /(C-MYC) REARRANGEMENT - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG081",
    "name": "FISH FOR CLL 1 SET (CHR. 12 AND DEL 13Q OR DEL P53 AND DEL ATM) - (Outlab)",
    "mrp": 6600,
    "category": "test"
  },
  {
    "code": "CG080",
    "name": "FISH FOR CLL 2 SETS (CHR. 12, DEL 13Q, DEL P53 AND DEL ATM) - (Outlab)",
    "mrp": 10460,
    "category": "test"
  },
  {
    "code": "CG042",
    "name": "FISH FOR COMMON CHROMOSOMAL ANEUPLOIDIES (13, 18, 21, X AND Y) ON PRODUCTS OF CONCEPTION - (Outlab)",
    "mrp": 6505,
    "category": "test"
  },
  {
    "code": "CG030",
    "name": "FISH FOR CRI-DU-CHAT SYNDROME OR 5P DELETION - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG051",
    "name": "FISH FOR DEL 20Q (20QTER) - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG049",
    "name": "FISH FOR DEL 5Q (EGR1) - (Outlab)",
    "mrp": 5975,
    "category": "test"
  },
  {
    "code": "CG050",
    "name": "FISH FOR DEL 7Q (D7S486) - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "AM170",
    "name": "FISH For del11q23 or LSIL MLL Gene Breakapart - (Outlab)",
    "mrp": 8800,
    "category": "test"
  },
  {
    "code": "CG026",
    "name": "FISH FOR DELETION 22Q SYNDROME /CATCH 22 - (Outlab)",
    "mrp": 6534,
    "category": "test"
  },
  {
    "code": "CG057",
    "name": "FISH FOR DELETION MYB OR DELETION 6Q - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG025",
    "name": "FISH FOR DELETION OF SNRPN REGION - (Outlab)",
    "mrp": 5860,
    "category": "test"
  },
  {
    "code": "CG027",
    "name": "FISH FOR EDWARD SYNDROME/TRISOMY 18 - (Outlab)",
    "mrp": 5990,
    "category": "test"
  },
  {
    "code": "AM171",
    "name": "FISH for HER 2- neu oncogene amplification_ FFPE slide - (Outlab)",
    "mrp": 12100,
    "category": "test"
  },
  {
    "code": "CG056",
    "name": "FISH FOR HYPER-EOSINOPHILIC SYNDROME (4Q12) (FIP1L1-PDGFRA) - (Outlab)",
    "mrp": 5975,
    "category": "test"
  },
  {
    "code": "AM172",
    "name": "FISH for IgH - Bcl2 - (Outlab)",
    "mrp": 7700,
    "category": "test"
  },
  {
    "code": "CG048",
    "name": "FISH FOR IGH (14Q32) REARRANGEMENT - (Outlab)",
    "mrp": 6565,
    "category": "test"
  },
  {
    "code": "AM173",
    "name": "FISH for Inv(16) - (Outlab)",
    "mrp": 5390,
    "category": "test"
  },
  {
    "code": "CG044",
    "name": "FISH FOR INVERSION 16 (CBFB)/T(16;16) - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG047",
    "name": "FISH FOR MLL (11Q23) REARRANGEMENT - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG077",
    "name": "FISH FOR MM PANEL (CHR. 12, DEL 13Q, DEL P53 AND DEL ATM) - (Outlab)",
    "mrp": 12765,
    "category": "test"
  },
  {
    "code": "CG076",
    "name": "FISH FOR MM PANEL (CHR. 12, DEL 13Q, DEL P53, DEL ATM AND IGH) - (Outlab)",
    "mrp": 16160,
    "category": "test"
  },
  {
    "code": "CG079",
    "name": "FISH FOR MM PANEL ADDITIONAL PROBE [IGH/T(4;14)/T(14;16)] - (Outlab)",
    "mrp": 5533,
    "category": "test"
  },
  {
    "code": "CG078",
    "name": "FISH FOR MM PANEL FOR 1 PROBE SET (CHR. 12, DEL 13Q, OR DEL P53, DEL ATM) - (Outlab)",
    "mrp": 10545,
    "category": "test"
  },
  {
    "code": "CG023",
    "name": "FISH FOR PATAU SYNDROME/TRISOMY 13 - (Outlab)",
    "mrp": 4895,
    "category": "test"
  },
  {
    "code": "CG065",
    "name": "FISH FOR PDGFRB BREAKAPART REARRANGEMENT - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG082",
    "name": "FISH FOR POST BMT XX/XY CHIMERISM (SEX MISMATCHED BMT) - (Outlab)",
    "mrp": 5590,
    "category": "test"
  },
  {
    "code": "CG037",
    "name": "FISH FOR PRESENCE OR ABSENCE OF SRY IN CASE OF XY FEMALE OR XX MALE - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG045",
    "name": "FISH FOR RARA BREAKAPART REARRANGEMENT - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG055",
    "name": "FISH FOR RB1 (13Q) DELETION - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG040",
    "name": "FISH FOR SEX CHROMOSOME MOSAICISM (TURNER/KLINEFELTER SYNDROME) FROM BLOOD - (Outlab)",
    "mrp": 5104,
    "category": "test"
  },
  {
    "code": "CG041",
    "name": "FISH FOR SEX CHROMOSOME MOSAICISM (TURNER/KLINEFELTER SYNDROME) FROM BUCCAL CELLS - (Outlab)",
    "mrp": 4640,
    "category": "test"
  },
  {
    "code": "CG032",
    "name": "FISH FOR SRY DELETION/TRANSLOCATION - (Outlab)",
    "mrp": 5965,
    "category": "test"
  },
  {
    "code": "AM175",
    "name": "FISH for t ( 15.17 ) or PML RARA - (Outlab)",
    "mrp": 5720,
    "category": "test"
  },
  {
    "code": "AM176",
    "name": "FISH for t (8.21) or LSI ETO - AML1 - (Outlab)",
    "mrp": 5060,
    "category": "test"
  },
  {
    "code": "AM177",
    "name": "FISH for t (9.22) Philadelphia translocation or BCR/ABL - (Outlab)",
    "mrp": 4950,
    "category": "test"
  },
  {
    "code": "CG058",
    "name": "FISH FOR T(1;19) OR TCF3/PBX1 - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "AM178",
    "name": "FISH for t(11.14) - Mantle cell lymphoma - (Outlab)",
    "mrp": 5500,
    "category": "test"
  },
  {
    "code": "CG061",
    "name": "FISH FOR T(14;16) / IGH-MAF - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG062",
    "name": "FISH FOR T(14;18)/ IGH-BCL2 - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG059",
    "name": "FISH FOR T(3;3)/INVERSION 3/RPN1-MECOM - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG060",
    "name": "FISH FOR T(4;14)/ IGH-FGFR3 - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "AM179",
    "name": "FISH For t(8.14) MYC/IGH Burkitts and Non Hodgkin Lymphoma - (Outlab)",
    "mrp": 4950,
    "category": "test"
  },
  {
    "code": "CG053",
    "name": "FISH FOR TEL-AML /ETV6-RUNX1 / T(12;21) - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "AM180",
    "name": "FISH for TEL/AML t(12.21) - (Outlab)",
    "mrp": 5060,
    "category": "test"
  },
  {
    "code": "CG066",
    "name": "FISH FOR TRAD/14Q22 - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG052",
    "name": "FISH FOR TRISOMY 8 - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG114",
    "name": "FISH FOR UROVYSION (BLADDER CANCER/ HEMATURIA) - (Outlab)",
    "mrp": 15710,
    "category": "test"
  },
  {
    "code": "CG029",
    "name": "FISH FOR VELOCARDIOFACIAL SYNDROME - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG028",
    "name": "FISH FOR WILLIAMS SYNDROME - (Outlab)",
    "mrp": 6565,
    "category": "test"
  },
  {
    "code": "CG031",
    "name": "FISH FOR WOLF HIRSCHHORN SYNDROME (WHS) OR 4P DELETION - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "CG115",
    "name": "FISH ON FORMALIN FIXED PARAFFIN EMBEDDED (FFPE) - (Outlab)",
    "mrp": 16320,
    "category": "test"
  },
  {
    "code": "CG068",
    "name": "FISH PANEL 2 PROBE - (Outlab)",
    "mrp": 10230,
    "category": "test"
  },
  {
    "code": "CG069",
    "name": "FISH PANEL 3 PROBE - (Outlab)",
    "mrp": 14440,
    "category": "test"
  },
  {
    "code": "CG070",
    "name": "FISH PANEL 4 PROBE - (Outlab)",
    "mrp": 18670,
    "category": "test"
  },
  {
    "code": "CG071",
    "name": "FISH PANEL 5 PROBE - (Outlab)",
    "mrp": 22990,
    "category": "test"
  },
  {
    "code": "CG072",
    "name": "FISH PANEL 6 PROBE - (Outlab)",
    "mrp": 27260,
    "category": "test"
  },
  {
    "code": "CG073",
    "name": "FISH PANEL 7 PROBE - (Outlab)",
    "mrp": 31665,
    "category": "test"
  },
  {
    "code": "CG074",
    "name": "FISH PANEL 8 PROBE - (Outlab)",
    "mrp": 36465,
    "category": "test"
  },
  {
    "code": "CG075",
    "name": "FISH PANEL 9 PROBE - (Outlab)",
    "mrp": 42915,
    "category": "test"
  },
  {
    "code": "SNL57",
    "name": "FLT3 GENOTYPNG TEST (PHARMACOGENOMICS) - (Outlab)",
    "mrp": 4425,
    "category": "test"
  },
  {
    "code": "AM183",
    "name": "Fluid - LDH - (Outlab)",
    "mrp": 440,
    "category": "test"
  },
  {
    "code": "CYT17",
    "name": "Fluid for malignant cells - INLAB",
    "mrp": 1585,
    "category": "test"
  },
  {
    "code": "TB006",
    "name": "FLUORESCENT SMEAR",
    "mrp": 470,
    "category": "test"
  },
  {
    "code": "CYT12",
    "name": "FNAC - Arm-Forearm-Thigh swelling - INLAB",
    "mrp": 2090,
    "category": "test"
  },
  {
    "code": "CYT11",
    "name": "FNAC - Back swelling - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "CYT06",
    "name": "FNAC - Breast mass - INLAB",
    "mrp": 2090,
    "category": "test"
  },
  {
    "code": "CYT08",
    "name": "FNAC - Cervical lymph node - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "CYT10",
    "name": "FNAC - Lipoma - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "CYT09",
    "name": "FNAC - Neck swelling - INLAB",
    "mrp": 2090,
    "category": "test"
  },
  {
    "code": "CYT13",
    "name": "FNAC - Swelling or Tumour - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "CYT07",
    "name": "FNAC - Thyroid mass - INLAB",
    "mrp": 2090,
    "category": "test"
  },
  {
    "code": "CG039",
    "name": "FOLLICULAR FLUID FISH IN CASE OF IVF PROCEDURE (FOR X CHROMOSOME MOSAICIASM) - (Outlab)",
    "mrp": 5580,
    "category": "test"
  },
  {
    "code": "LIFRF",
    "name": "Fragile-X for Females - (Outlab)",
    "mrp": 14470,
    "category": "test"
  },
  {
    "code": "LIFRM",
    "name": "Fragile-X Screening For Males - (Outlab)",
    "mrp": 14470,
    "category": "test"
  },
  {
    "code": "AM186",
    "name": "Free Protein - S antigen assay - (Outlab)",
    "mrp": 6330,
    "category": "test"
  },
  {
    "code": "MIC06",
    "name": "FUNGAL CULTURE",
    "mrp": 350,
    "category": "test"
  },
  {
    "code": "AM007",
    "name": "Gall Bladder Stone Analysis - (Outlab)",
    "mrp": 1650,
    "category": "test"
  },
  {
    "code": "LIGCM",
    "name": "GC-MS Gas Chromatography- Mass Spectrometry(URINE) - (Outlab)",
    "mrp": 19660,
    "category": "test"
  },
  {
    "code": "NA1146",
    "name": "gene CORE Predict - (Outlab)",
    "mrp": 33765,
    "category": "test"
  },
  {
    "code": "NA2466",
    "name": "geneCORE cancer expanded panel- 34 genes - (Outlab)",
    "mrp": 90015,
    "category": "test"
  },
  {
    "code": "NA1411",
    "name": "geneCORE Paradigm Panel 2 - (Outlab)",
    "mrp": 168765,
    "category": "test"
  },
  {
    "code": "NA2467",
    "name": "geneCORE Somatic 161 Gene Panel - (Outlab)",
    "mrp": 50640,
    "category": "test"
  },
  {
    "code": "NA1443",
    "name": "geneCORE somatic 52 gene panel - (Outlab)",
    "mrp": 45015,
    "category": "test"
  },
  {
    "code": "HAYHT",
    "name": "Genetic HEALTH ASSESSMENT TEST - (Outlab)",
    "mrp": 12300,
    "category": "test"
  },
  {
    "code": "SNL33",
    "name": "GENETIC STUDY OF COUPLE + PRODUCT OF CONCEPTION - (Outlab)",
    "mrp": 10515,
    "category": "test"
  },
  {
    "code": "TB002",
    "name": "GENEXPERT",
    "mrp": 3340,
    "category": "test"
  },
  {
    "code": "HAYCG",
    "name": "Genomic Cardio Screening - (Outlab)",
    "mrp": 9999,
    "category": "test"
  },
  {
    "code": "SNL76",
    "name": "Gilbert's Syndrome Gene Sequencing. - (Outlab)",
    "mrp": 7937,
    "category": "test"
  },
  {
    "code": "P00064",
    "name": "Glioma Panel 1 - (Outlab)",
    "mrp": 21390,
    "category": "test"
  },
  {
    "code": "AM187",
    "name": "Glucose - Fluid - (Outlab)",
    "mrp": 420,
    "category": "test"
  },
  {
    "code": "MIC12",
    "name": "GRAMS STAINING",
    "mrp": 360,
    "category": "test"
  },
  {
    "code": "WELG1",
    "name": "Gut Microbiome",
    "mrp": 12999,
    "category": "test"
  },
  {
    "code": "AM189",
    "name": "Haemophilia Panel (APTT, Factor VIII and IX) - (Outlab)",
    "mrp": 4400,
    "category": "test"
  },
  {
    "code": "HAP",
    "name": "HAIR ANALYSIS PROFILE",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM061",
    "name": "Hams Test (For PNH Screen) - Acidified Serum lysis test - (Outlab)",
    "mrp": 1650,
    "category": "test"
  },
  {
    "code": "SNL61",
    "name": "HBV COMBO TEST INCLUDING QUANTITATIVE TEST AND GENOTYPING - (Outlab)",
    "mrp": 13508,
    "category": "test"
  },
  {
    "code": "SNL60",
    "name": "HCV COMBO TEST INCLUDING QUANTITATIVE TEST AND GENOTYPING - (Outlab)",
    "mrp": 13508,
    "category": "test"
  },
  {
    "code": "YB1732",
    "name": "hemaCORE MDS extended Panel - 8 markers - (Outlab)",
    "mrp": 11828,
    "category": "test"
  },
  {
    "code": "AM010",
    "name": "Hepatitis A Virus IgG (HAV IgG) Antibodies - (Outlab)",
    "mrp": 1430,
    "category": "test"
  },
  {
    "code": "SNL51",
    "name": "HEPATITIS B GENOTYPING AND DRUG RESISTANT TEST - (Outlab)",
    "mrp": 6452,
    "category": "test"
  },
  {
    "code": "SNL50",
    "name": "HEPATITIS C GENOTYPING - (Outlab)",
    "mrp": 8976,
    "category": "test"
  },
  {
    "code": "KH096",
    "name": "Her2 by FISH - (Outlab)",
    "mrp": 22250,
    "category": "test"
  },
  {
    "code": "NIPT1",
    "name": "HERCHECK NIPT",
    "mrp": 17500,
    "category": "test"
  },
  {
    "code": "NIPT3",
    "name": "HERCHECK NIPT ALL CHROMOSOMES",
    "mrp": 20000,
    "category": "test"
  },
  {
    "code": "NIPT2",
    "name": "HERCHECK NIPT WITH MICRO DELETION",
    "mrp": 30000,
    "category": "test"
  },
  {
    "code": "AM119",
    "name": "High Resolution Banding by Chromosomal Analysis - (Outlab)",
    "mrp": 7500,
    "category": "test"
  },
  {
    "code": "SNL31",
    "name": "HIGH RESOLUTION CHROMOSOME STUDY (COUPLE) - (Outlab)",
    "mrp": 2838,
    "category": "test"
  },
  {
    "code": "SNL30",
    "name": "HIGH RESOLUTION CHROMOSOME STUDY (SINGLE) - (Outlab)",
    "mrp": 2838,
    "category": "test"
  },
  {
    "code": "AM120",
    "name": "High Sensitive Troponin T - (Outlab)",
    "mrp": 2090,
    "category": "test"
  },
  {
    "code": "HIS08",
    "name": "HISTOPATHOLOGY REVIEW 2nd opinion - INLAB",
    "mrp": 1750,
    "category": "test"
  },
  {
    "code": "HIS01",
    "name": "Histopathology Special Stain -Acid Fast Z N stain - INLAB",
    "mrp": 1585,
    "category": "test"
  },
  {
    "code": "HIS03",
    "name": "Histopathology Special Stain -Gomoris Methenamine Silver - INLAB",
    "mrp": 2321,
    "category": "test"
  },
  {
    "code": "HIS02",
    "name": "Histopathology Special Stain -Periodic Acid Schiff - INLAB",
    "mrp": 1500,
    "category": "test"
  },
  {
    "code": "HIS12",
    "name": "Histopathology Special Stain- Amyloid Congo Red - INLAB",
    "mrp": 2255,
    "category": "test"
  },
  {
    "code": "SNL17",
    "name": "HIV DRUG RESISTANCE TEST - (Outlab)",
    "mrp": 18128,
    "category": "test"
  },
  {
    "code": "SNL13",
    "name": "HIV PROVIRAL DNA QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 1815,
    "category": "test"
  },
  {
    "code": "AM063",
    "name": "HIV-1 Drug Resistance Genotype - (Outlab)",
    "mrp": 22000,
    "category": "test"
  },
  {
    "code": "AM077",
    "name": "HLA - Celiac Disease (DR-DQB1-DQA1-DQ2,DQ8) - (Outlab)",
    "mrp": 9865,
    "category": "test"
  },
  {
    "code": "SNL62",
    "name": "HLA A, B, C, DRB1, DQB1 - (Outlab)",
    "mrp": 15905,
    "category": "test"
  },
  {
    "code": "LIHLA",
    "name": "HLA DQ Alpha And Beta (For BOH) - Individual - (Outlab)",
    "mrp": 43240,
    "category": "test"
  },
  {
    "code": "HMPV",
    "name": "HMPV REAL TIME QUALITATIVE PCR",
    "mrp": 3455,
    "category": "test"
  },
  {
    "code": "SNL15",
    "name": "HPV 16/18 QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 2035,
    "category": "test"
  },
  {
    "code": "SNL73",
    "name": "HPV Qualitative Real Time PCR - (Outlab)",
    "mrp": 2035,
    "category": "test"
  },
  {
    "code": "AM055",
    "name": "HSV 1 and 2 DNA PCR (Qualitative) - (Outlab)",
    "mrp": 6600,
    "category": "test"
  },
  {
    "code": "SNL09",
    "name": "HSV I & II QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 2376,
    "category": "test"
  },
  {
    "code": "DNA75",
    "name": "IHC - 0ct3/4 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA28",
    "name": "IHC - AFP - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "KH013",
    "name": "IHC - ALK 1-D5F3 - (Outlab)",
    "mrp": 6920,
    "category": "test"
  },
  {
    "code": "DNA27",
    "name": "IHC - AMACR - (Outlab)",
    "mrp": 3630,
    "category": "test"
  },
  {
    "code": "DNA29",
    "name": "IHC - Androgen Receptor - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA31",
    "name": "IHC - B-catenin - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA30",
    "name": "IHC - Bcl2 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA32",
    "name": "IHC - BCL6 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA33",
    "name": "IHC - BerEP-4 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA51",
    "name": "IHC - c-Myc - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA34",
    "name": "IHC - CA - 125 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA58",
    "name": "IHC - Calcitonin - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA56",
    "name": "IHC - Calponin - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA57",
    "name": "IHC - Calretinin - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA40",
    "name": "IHC - CD10 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA46",
    "name": "IHC - CD117/c - kit - (Outlab)",
    "mrp": 3630,
    "category": "test"
  },
  {
    "code": "DNA44",
    "name": "IHC - CD138 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA41",
    "name": "IHC - CD15 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA47",
    "name": "IHC - CD1a - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA37",
    "name": "IHC - CD20 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA39",
    "name": "IHC - CD23 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA36",
    "name": "IHC - CD3 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA42",
    "name": "IHC - CD30 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA43",
    "name": "IHC - CD34 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA35",
    "name": "IHC - CD45(LCA) - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA38",
    "name": "IHC - CD5 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "AM196",
    "name": "IHC - CD57 - (Outlab)",
    "mrp": 2530,
    "category": "test"
  },
  {
    "code": "DNA48",
    "name": "IHC - CD68 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA45",
    "name": "IHC - CD99(Mic - 2) - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA49",
    "name": "IHC - CDX2 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA50",
    "name": "IHC - CEA - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA59",
    "name": "IHC - Chromogranin - A - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA52",
    "name": "IHC - CK - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA55",
    "name": "IHC - CK(HMW) - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA54",
    "name": "IHC - CK20 - (Outlab)",
    "mrp": 3630,
    "category": "test"
  },
  {
    "code": "DNA53",
    "name": "IHC - CK7 - (Outlab)",
    "mrp": 3630,
    "category": "test"
  },
  {
    "code": "DNA60",
    "name": "IHC - Cyclin - D1 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA62",
    "name": "IHC - D2 - 40 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA61",
    "name": "IHC - Desmin - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA64",
    "name": "IHC - E-Cadherin - (Outlab)",
    "mrp": 3300,
    "category": "test"
  },
  {
    "code": "DNA63",
    "name": "IHC - EMA - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA65",
    "name": "IHC - GATA3 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA66",
    "name": "IHC - GFAP - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA67",
    "name": "IHC - Glypican - 3 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA25",
    "name": "IHC - Her-2/nue - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA68",
    "name": "IHC - HMB - 45 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "KH051",
    "name": "IHC - HMB - 45 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA69",
    "name": "IHC - HSA - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA70",
    "name": "IHC - Inhibin Alpha - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "KH052",
    "name": "IHC - Inhibin Alpha - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA71",
    "name": "IHC - Kappa - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH053",
    "name": "IHC - Kappa - (Outlab)",
    "mrp": 3205,
    "category": "test"
  },
  {
    "code": "DNA26",
    "name": "IHC - Ki-67 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH054",
    "name": "IHC - Ki-67 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA72",
    "name": "IHC - Lambda - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH055",
    "name": "IHC - Lambda - (Outlab)",
    "mrp": 3205,
    "category": "test"
  },
  {
    "code": "DNA73",
    "name": "IHC - Mum-1 - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "KH056",
    "name": "IHC - Mum-1 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA74",
    "name": "IHC - Napsin A - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH057",
    "name": "IHC - Napsin A - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "AM267",
    "name": "IHC - p 16 - (Outlab)",
    "mrp": 2970,
    "category": "test"
  },
  {
    "code": "DNA77",
    "name": "IHC - P40 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "KH058",
    "name": "IHC - P40 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA78",
    "name": "IHC - P53 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH059",
    "name": "IHC - P53 - (Outlab)",
    "mrp": 3205,
    "category": "test"
  },
  {
    "code": "DNA76",
    "name": "IHC - P63 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH060",
    "name": "IHC - P63 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA79",
    "name": "IHC - PAX8 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "KH061",
    "name": "IHC - PAX8 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "KH062",
    "name": "IHC - ROS1-SP384 - (Outlab)",
    "mrp": 8650,
    "category": "test"
  },
  {
    "code": "DNA81",
    "name": "IHC - S-100 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA85",
    "name": "IHC - SALL4 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA83",
    "name": "IHC - SATB2 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA80",
    "name": "IHC - SMA - (Outlab)",
    "mrp": 3630,
    "category": "test"
  },
  {
    "code": "DNA84",
    "name": "IHC - STAT6 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA82",
    "name": "IHC - Synaptophysin - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA87",
    "name": "IHC - TdT - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA89",
    "name": "IHC - TFE3 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA88",
    "name": "IHC - TLE- 1 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA86",
    "name": "IHC - TTF - 1 - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA90",
    "name": "IHC - Uroplakin II - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "DNA91",
    "name": "IHC - Vimentin - (Outlab)",
    "mrp": 3000,
    "category": "test"
  },
  {
    "code": "DNA92",
    "name": "IHC - WT - 1 - (Outlab)",
    "mrp": 3090,
    "category": "test"
  },
  {
    "code": "AM203",
    "name": "IHC Any Three Markers - (Outlab)",
    "mrp": 5940,
    "category": "test"
  },
  {
    "code": "AM204",
    "name": "IHC Any Two Markers - (Outlab)",
    "mrp": 3960,
    "category": "test"
  },
  {
    "code": "AM206",
    "name": "IHC Isocitrate Dehydrogenase (IDH-1) - (Outlab)",
    "mrp": 3850,
    "category": "test"
  },
  {
    "code": "AM208",
    "name": "IHC Marker - CD56 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM209",
    "name": "IHC Marker - CEA - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM210",
    "name": "IHC Marker - CK19 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM211",
    "name": "IHC Marker - CK7 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM271",
    "name": "IHC Marker - MIC2 - (Outlab)",
    "mrp": 2970,
    "category": "test"
  },
  {
    "code": "AM212",
    "name": "IHC Marker - P63 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM213",
    "name": "IHC Marker - TTF1 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM272",
    "name": "IHC Marker AFP - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM219",
    "name": "IHC Marker bcl2 Oncoprotein - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM220",
    "name": "IHC Marker c-Kit (CD117) - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM221",
    "name": "IHC Marker CD 45(LCA) - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM222",
    "name": "IHC Marker CD10 - (Outlab)",
    "mrp": 2530,
    "category": "test"
  },
  {
    "code": "AM223",
    "name": "IHC Marker CD15 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM224",
    "name": "IHC Marker CD20 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM225",
    "name": "IHC Marker CD3 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM226",
    "name": "IHC Marker CD30 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM227",
    "name": "IHC Marker CD34 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM273",
    "name": "IHC Marker CD5 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM228",
    "name": "IHC Marker CD99 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM229",
    "name": "IHC Marker Chromogranin A - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM230",
    "name": "IHC Marker CK20 - (Outlab)",
    "mrp": 2530,
    "category": "test"
  },
  {
    "code": "AM231",
    "name": "IHC Marker Desmin - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM232",
    "name": "IHC Marker Epithelial membrane antigen (EMA) - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM214",
    "name": "IHC Marker for Kappa Light chain - (Outlab)",
    "mrp": 2970,
    "category": "test"
  },
  {
    "code": "AM215",
    "name": "IHC Marker for Ki - 67 Antigen - (Outlab)",
    "mrp": 2530,
    "category": "test"
  },
  {
    "code": "AM216",
    "name": "IHC Marker for Lambda Light chain - (Outlab)",
    "mrp": 2750,
    "category": "test"
  },
  {
    "code": "AM233",
    "name": "IHC Marker Her-2-Neu - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM234",
    "name": "IHC Marker HMB 45 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM217",
    "name": "IHC Marker Inhibin Alpha - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM235",
    "name": "IHC Marker NSE - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM236",
    "name": "IHC Marker p53 protein - (Outlab)",
    "mrp": 2810,
    "category": "test"
  },
  {
    "code": "AM237",
    "name": "IHC Marker Pancytokeratin - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM238",
    "name": "IHC Marker S100 - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM239",
    "name": "IHC Marker Smooth Muscle Actin (SMA) - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM240",
    "name": "IHC Marker Synaptophysin - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM274",
    "name": "IHC Marker Tdt - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM241",
    "name": "IHC Marker Vimentin - (Outlab)",
    "mrp": 2420,
    "category": "test"
  },
  {
    "code": "AM244",
    "name": "IHC Panel Melanoma - (Outlab)",
    "mrp": 4400,
    "category": "test"
  },
  {
    "code": "AM249",
    "name": "IHC PDL-1 (SP263-FDA approved clone) - (Outlab)",
    "mrp": 11550,
    "category": "test"
  },
  {
    "code": "AM058",
    "name": "IHC-Breast Cancer Panel I (ER, PR, Her2/neu) - (Outlab)",
    "mrp": 4400,
    "category": "test"
  },
  {
    "code": "AM029",
    "name": "Immunoglobulin - IgG 4 Sub Class - (Outlab)",
    "mrp": 7700,
    "category": "test"
  },
  {
    "code": "AM030",
    "name": "Immunoglobulin Fixation Electrophoresis - Serum - (Outlab)",
    "mrp": 7150,
    "category": "test"
  },
  {
    "code": "DNA20",
    "name": "IMMUNOHISTOCHEMISTRY (IHC) - 1 Marker - (Outlab)",
    "mrp": 3399,
    "category": "test"
  },
  {
    "code": "DNA21",
    "name": "IMMUNOHISTOCHEMISTRY (IHC) - 2 Markers - (Outlab)",
    "mrp": 5104,
    "category": "test"
  },
  {
    "code": "DNA22",
    "name": "IMMUNOHISTOCHEMISTRY (IHC) - 3 Markers - (Outlab)",
    "mrp": 5957,
    "category": "test"
  },
  {
    "code": "DNA23",
    "name": "IMMUNOHISTOCHEMISTRY (IHC) - 4 Markers - (Outlab)",
    "mrp": 8503,
    "category": "test"
  },
  {
    "code": "KH009",
    "name": "IMMUNOHISTOCHEMISTRY (IHC) - 4 Markers - (Outlab)",
    "mrp": 9620,
    "category": "test"
  },
  {
    "code": "DNA24",
    "name": "IMMUNOHISTOCHEMISTRY (IHC) - ER/PR - (Outlab)",
    "mrp": 6798,
    "category": "test"
  },
  {
    "code": "AM026",
    "name": "Insulin-Like Growth Factor Binding Protein-3 (IGFBP-3) - (Outlab)",
    "mrp": 4620,
    "category": "test"
  },
  {
    "code": "SNL56",
    "name": "JAK2 GENOTYPING TEST (PHARMACOGENOMICS) - (Outlab)",
    "mrp": 9218,
    "category": "test"
  },
  {
    "code": "AM028",
    "name": "JAK2 Mutation (V617F) - (Outlab)",
    "mrp": 7150,
    "category": "test"
  },
  {
    "code": "KH112",
    "name": "K Precision 500 - (Outlab)",
    "mrp": 111240,
    "category": "test"
  },
  {
    "code": "SNL53",
    "name": "K-RAS GENOTYPING TEST (PHARMACOGENOMICS) - (Outlab)",
    "mrp": 3765,
    "category": "test"
  },
  {
    "code": "KH110",
    "name": "K50 Precision Panel - Liquid Biopsy (50 genes) - (Outlab)",
    "mrp": 69220,
    "category": "test"
  },
  {
    "code": "KH109",
    "name": "K50 Precision Panel (50 genes) - (Outlab)",
    "mrp": 46970,
    "category": "test"
  },
  {
    "code": "KH111",
    "name": "K75 Therapeutically Actionable Panel - (Outlab)",
    "mrp": 59330,
    "category": "test"
  },
  {
    "code": "CG002",
    "name": "KARYOTYPING COUPLES - HUSBAND - (Outlab)",
    "mrp": 2860,
    "category": "test"
  },
  {
    "code": "CG003",
    "name": "KARYOTYPING COUPLES - WIFE - (Outlab)",
    "mrp": 2860,
    "category": "test"
  },
  {
    "code": "CG001",
    "name": "KARYOTYPING - (Outlab)",
    "mrp": 3124,
    "category": "test"
  },
  {
    "code": "LICHA",
    "name": "KARYOTYPING ANALYSIS - OUTLAB - (Outlab)",
    "mrp": 3340,
    "category": "test"
  },
  {
    "code": "CG004",
    "name": "KARYOTYPING FOR AMBIGUOUS GENITALIA - (Outlab)",
    "mrp": 4820,
    "category": "test"
  },
  {
    "code": "AM316",
    "name": "Ketone bodies (Urine) - (Outlab)",
    "mrp": 200,
    "category": "test"
  },
  {
    "code": "KH113",
    "name": "KH-Comprehensive Genomic Panel 500 - (Outlab)",
    "mrp": 234840,
    "category": "test"
  },
  {
    "code": "AM283",
    "name": "Lactate - CSF - (Outlab)",
    "mrp": 1210,
    "category": "test"
  },
  {
    "code": "AM284",
    "name": "Lactate Dehydrogenase (LDH) - Fluid - (Outlab)",
    "mrp": 440,
    "category": "test"
  },
  {
    "code": "HIS06",
    "name": "LARGE BIOPSY TISSUE SIZE 3-6CM - INLAB",
    "mrp": 2499,
    "category": "test"
  },
  {
    "code": "LBCCS",
    "name": "LBC CERVICAL SMEAR",
    "mrp": 1645,
    "category": "test"
  },
  {
    "code": "AM285",
    "name": "Lead - 24 Hours Urine - (Outlab)",
    "mrp": 2150,
    "category": "test"
  },
  {
    "code": "AM286",
    "name": "Leukaemia Diagnostic Panel - CLL/ HCL/ SLL Basic (Immunophenotyping) - (Outlab)",
    "mrp": 21340,
    "category": "test"
  },
  {
    "code": "AM287",
    "name": "Leukaemia Diagnostic Panel AML Characterization - (Outlab)",
    "mrp": 15400,
    "category": "test"
  },
  {
    "code": "P00236",
    "name": "Leukemia Panel-4 - (Outlab)",
    "mrp": 17000,
    "category": "test"
  },
  {
    "code": "NA1616",
    "name": "liquiCORE Guardant360 - (Outlab)",
    "mrp": 337515,
    "category": "test"
  },
  {
    "code": "ME2445",
    "name": "liquiCORE PiK3CA - (Outlab)",
    "mrp": 16890,
    "category": "test"
  },
  {
    "code": "NA2567",
    "name": "liquid Biopsy (52 gene) - (Outlab)",
    "mrp": 54015,
    "category": "test"
  },
  {
    "code": "CG034",
    "name": "LOW-GRADE MOSAICISM DETECTION BY FISH ON BLOOD - (Outlab)",
    "mrp": 4640,
    "category": "test"
  },
  {
    "code": "CG035",
    "name": "LOW-GRADE MOSAICISM DETECTION BY FISH ON BUCCAL CELLS - (Outlab)",
    "mrp": 4640,
    "category": "test"
  },
  {
    "code": "CG036",
    "name": "LOW-GRADE MOSAICISM DETECTION BY FISH ON URINE - (Outlab)",
    "mrp": 4640,
    "category": "test"
  },
  {
    "code": "AM124",
    "name": "Lupocare (APL IgG, APL IgM, ACL IgG,ACL IgA, ACL IgM, LA) - (Outlab)",
    "mrp": 5390,
    "category": "test"
  },
  {
    "code": "AM127",
    "name": "Lyme Disease (Borrelia burgdorferi) Antibodies, IgG and IgM - (Outlab)",
    "mrp": 2090,
    "category": "test"
  },
  {
    "code": "AM128",
    "name": "Magnesium - 24 hours Urine - (Outlab)",
    "mrp": 660,
    "category": "test"
  },
  {
    "code": "AM129",
    "name": "Magnesium - Urine - (Outlab)",
    "mrp": 660,
    "category": "test"
  },
  {
    "code": "CYT02",
    "name": "MALIGNANT CELLS - INLAB",
    "mrp": 1020,
    "category": "test"
  },
  {
    "code": "P00353",
    "name": "mammaCORE BRCA Advanced Panel - (Outlab)",
    "mrp": 45015,
    "category": "test"
  },
  {
    "code": "P00354",
    "name": "mammaCORE BRCA Advanced Plus Panel - (Outlab)",
    "mrp": 56265,
    "category": "test"
  },
  {
    "code": "NA2577",
    "name": "mammaCORE Homologous Recombination Deficiency(HRR) - (Outlab)",
    "mrp": 36125,
    "category": "test"
  },
  {
    "code": "P00009",
    "name": "mammaCORE Panel 2 - (Outlab)",
    "mrp": 4515,
    "category": "test"
  },
  {
    "code": "AM130",
    "name": "Manganese - Urine - (Outlab)",
    "mrp": 3300,
    "category": "test"
  },
  {
    "code": "HIS05",
    "name": "MEDIUM BIOPSY TISSUE SIZE 1-3CM - INLAB",
    "mrp": 1749,
    "category": "test"
  },
  {
    "code": "AM131",
    "name": "Mercury - Urine - (Outlab)",
    "mrp": 3800,
    "category": "test"
  },
  {
    "code": "AM040",
    "name": "Metanephrine 24 Hr Urine - (Outlab)",
    "mrp": 6270,
    "category": "test"
  },
  {
    "code": "CG010",
    "name": "METAPHASE FISH 22Q MICRODELETION-DI-GEORGE SYNDROME - (Outlab)",
    "mrp": 3370,
    "category": "test"
  },
  {
    "code": "CG011",
    "name": "METAPHASE FISH-15Q-DELETION-PRADER WILLI SYNDROME - (Outlab)",
    "mrp": 4741,
    "category": "test"
  },
  {
    "code": "AM133",
    "name": "Microfilaria Detection (Microscopy) - (Outlab)",
    "mrp": 1270,
    "category": "test"
  },
  {
    "code": "MM1119",
    "name": "Microsatellite Instability (MSI) - (Outlab)",
    "mrp": 14867,
    "category": "test"
  },
  {
    "code": "CASMM",
    "name": "MISCELLANEOUS CULTURE AND SENSITIVITY (MANUAL)",
    "mrp": 687,
    "category": "test"
  },
  {
    "code": "MIC03",
    "name": "MISCELLANEOUS CULTURE AND SUSCEPTIBILITY",
    "mrp": 955,
    "category": "test"
  },
  {
    "code": "CG084",
    "name": "MM PLASMA CELL ISOLATION ONLY - (Outlab)",
    "mrp": 6680,
    "category": "test"
  },
  {
    "code": "HIS10",
    "name": "Modified Radicle Mastectomy -Breast - INLAB",
    "mrp": 9800,
    "category": "test"
  },
  {
    "code": "HPE20",
    "name": "Modified Radicle Mastectomy -Breast with ER/PR - (Outlab)",
    "mrp": 6110,
    "category": "test"
  },
  {
    "code": "HPE21",
    "name": "Modified Radicle Mastectomy -Breast with ER/PR & Her-2/nu - (Outlab)",
    "mrp": 12000,
    "category": "test"
  },
  {
    "code": "AM134",
    "name": "Modified ZN-Stain (Nocardia) - (Outlab)",
    "mrp": 880,
    "category": "test"
  },
  {
    "code": "BH1059",
    "name": "Multiple Myeloma Comprehensive Panel - (Outlab)",
    "mrp": 13000,
    "category": "test"
  },
  {
    "code": "AM292",
    "name": "Myoglobin - Spot Urine - (Outlab)",
    "mrp": 1980,
    "category": "test"
  },
  {
    "code": "NA1706",
    "name": "neuroCORE GlioSeq - (Outlab)",
    "mrp": 191265,
    "category": "test"
  },
  {
    "code": "NBS-4",
    "name": "NEWBORN SCREENING - 4",
    "mrp": 1705,
    "category": "test"
  },
  {
    "code": "LINB3",
    "name": "Newborn Screening Panel - 3 Disorders (CH, CAH, G6PD Deficiency) - (Outlab)",
    "mrp": 1660,
    "category": "test"
  },
  {
    "code": "LINB4",
    "name": "Newborn Screening Panel - 4 Disorders + Hemoglobinopathies - (Outlab)",
    "mrp": 3790,
    "category": "test"
  },
  {
    "code": "LINB7",
    "name": "Newborn Screening Panel - 7 Disorders - (Outlab)",
    "mrp": 3160,
    "category": "test"
  },
  {
    "code": "LINHB",
    "name": "Newborn Screening Panel - 7 Disorders + Hemoglobinopathies - (Outlab)",
    "mrp": 4660,
    "category": "test"
  },
  {
    "code": "AM068",
    "name": "Nor-Metanephrine - 24 hrs Urine - (Outlab)",
    "mrp": 3300,
    "category": "test"
  },
  {
    "code": "LP001",
    "name": "OMEGA 6/3 RATIO - (Outlab)",
    "mrp": 2221,
    "category": "test"
  },
  {
    "code": "SNM54",
    "name": "Oncomine Comprehensive Assay - (Outlab)",
    "mrp": 42015,
    "category": "test"
  },
  {
    "code": "SNM280",
    "name": "Oncomine Comprehensive Plus panel - (Outlab)",
    "mrp": 171015,
    "category": "test"
  },
  {
    "code": "SNM55",
    "name": "Oncomine Focus Panel - (Outlab)",
    "mrp": 34215,
    "category": "test"
  },
  {
    "code": "SNM56",
    "name": "Oncomine Lung cfTNA Cancer Panel - (Outlab)",
    "mrp": 36050,
    "category": "test"
  },
  {
    "code": "SNM189",
    "name": "Oncomine Myeloid Panel [MDS,MPN,AML,CML,CMML,JMML] - (Outlab)",
    "mrp": 31790,
    "category": "test"
  },
  {
    "code": "SNM216",
    "name": "Oncomine Tumor mutation Burden (TMB) - (Outlab)",
    "mrp": 42015,
    "category": "test"
  },
  {
    "code": "CYT14",
    "name": "PAP - PAPANICULAOU SMEAR - INLAB",
    "mrp": 560,
    "category": "test"
  },
  {
    "code": "KH073",
    "name": "PD-L1 (22C3) - (Outlab)",
    "mrp": 29660,
    "category": "test"
  },
  {
    "code": "IA2237",
    "name": "PD-L1 (Sp 142) - (Outlab)",
    "mrp": 11265,
    "category": "test"
  },
  {
    "code": "KH074",
    "name": "PD-L1 (Sp 263) - (Outlab)",
    "mrp": 12360,
    "category": "test"
  },
  {
    "code": "KH098",
    "name": "PDGFRA by FISH - (Outlab)",
    "mrp": 12360,
    "category": "test"
  },
  {
    "code": "HAYPS",
    "name": "PEDIATRIC COMPREHENSIVE SCREENING (GENOMIC) - (Outlab)",
    "mrp": 10695,
    "category": "test"
  },
  {
    "code": "YB2450",
    "name": "Ph -Like ALL Panel - (Outlab)",
    "mrp": 18015,
    "category": "test"
  },
  {
    "code": "HAYPG",
    "name": "Pharmacogenomics Comprehensive Panel - (Outlab)",
    "mrp": 9999,
    "category": "test"
  },
  {
    "code": "HAYPO",
    "name": "Pharmacogenomics Oncology Panel - (Outlab)",
    "mrp": 9999,
    "category": "test"
  },
  {
    "code": "AM334",
    "name": "Phospholipase A2 Receptor Antibodies Qualitative - (Outlab)",
    "mrp": 6160,
    "category": "test"
  },
  {
    "code": "AM137",
    "name": "Phosphorus - Urine - (Outlab)",
    "mrp": 330,
    "category": "test"
  },
  {
    "code": "CYT24",
    "name": "Pleural fluid analysis with ADA - INLAB",
    "mrp": 4655,
    "category": "test"
  },
  {
    "code": "CYT25",
    "name": "Pleural fluid analysis with AFB - INLAB",
    "mrp": 2480,
    "category": "test"
  },
  {
    "code": "CYT26",
    "name": "Pleural fluid analysis with AFB and ADA - INLAB",
    "mrp": 4870,
    "category": "test"
  },
  {
    "code": "CYT15",
    "name": "Pleural fluid cytology - INLAB",
    "mrp": 1995,
    "category": "test"
  },
  {
    "code": "AFP07",
    "name": "PLM AFB DRUG SUSCEPTIBILITY",
    "mrp": 4697,
    "category": "test"
  },
  {
    "code": "SNL35",
    "name": "PML/RARA (AML - M3) (APML) - (Outlab)",
    "mrp": 4065,
    "category": "test"
  },
  {
    "code": "SNL65",
    "name": "PML/RARA QUALITATIVE (BCR 1, 2 & 3) - (Outlab)",
    "mrp": 4637,
    "category": "test"
  },
  {
    "code": "SNL66",
    "name": "PML/RARA QUANITATIVE (BCR 1, 2 & 3) - (Outlab)",
    "mrp": 6237,
    "category": "test"
  },
  {
    "code": "AM060",
    "name": "PNH (Paroxysmal Nocturnal Hemoglobinuria) RBC Screening - (Outlab)",
    "mrp": 7480,
    "category": "test"
  },
  {
    "code": "AM056",
    "name": "POC By Karyotyping reflex to FISH - (Outlab)",
    "mrp": 7590,
    "category": "test"
  },
  {
    "code": "AM139",
    "name": "Potassium (K+) - 24hrs Urine - (Outlab)",
    "mrp": 330,
    "category": "test"
  },
  {
    "code": "SNL24",
    "name": "PRODUCTS OF CONCEPTION (POC) - (Outlab)",
    "mrp": 4307,
    "category": "test"
  },
  {
    "code": "CG021",
    "name": "PRODUCTS OF CONCEPTION KARYOTYPE - (Outlab)",
    "mrp": 9560,
    "category": "test"
  },
  {
    "code": "AM140",
    "name": "Protein - C - (Outlab)",
    "mrp": 7700,
    "category": "test"
  },
  {
    "code": "AM054",
    "name": "Protein Electrophoresis - Urine - (Outlab)",
    "mrp": 2200,
    "category": "test"
  },
  {
    "code": "NA2469",
    "name": "pulmoCORE Basic Panel - (Outlab)",
    "mrp": 16890,
    "category": "test"
  },
  {
    "code": "P00141",
    "name": "pulmoCORE Extended Panel - (Outlab)",
    "mrp": 28140,
    "category": "test"
  },
  {
    "code": "LIQUA",
    "name": "Quadruple Marker- (Autodelfia) - (Outlab)",
    "mrp": 3550,
    "category": "test"
  },
  {
    "code": "AM006",
    "name": "Renal Stone Analysis - (Outlab)",
    "mrp": 1650,
    "category": "test"
  },
  {
    "code": "AM052",
    "name": "RF IgM Antibodies - (Outlab)",
    "mrp": 1050,
    "category": "test"
  },
  {
    "code": "RHAT",
    "name": "RH antibody titer - (Outlab)",
    "mrp": 600,
    "category": "test"
  },
  {
    "code": "AM301",
    "name": "Rota Virus Antigen Detection - (Outlab)",
    "mrp": 1540,
    "category": "test"
  },
  {
    "code": "SNL11",
    "name": "RUBELLA QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 1502,
    "category": "test"
  },
  {
    "code": "LISV2",
    "name": "Single Variant Analysis- Couple (1 Variant) - (Outlab)",
    "mrp": 11080,
    "category": "test"
  },
  {
    "code": "LISV1",
    "name": "Single Variant Analysis- Individual (1 Variant) - (Outlab)",
    "mrp": 5500,
    "category": "test"
  },
  {
    "code": "HIS04",
    "name": "SMALL BIOPSY TISSUE SIZE 0 -1CM - INLAB",
    "mrp": 999,
    "category": "test"
  },
  {
    "code": "TB005",
    "name": "SMEAR AFB",
    "mrp": 595,
    "category": "test"
  },
  {
    "code": "AM320",
    "name": "Smear for fungal elements - (Outlab)",
    "mrp": 800,
    "category": "test"
  },
  {
    "code": "AM304",
    "name": "Sodium (Na+) - 24hrs Urine - (Outlab)",
    "mrp": 310,
    "category": "test"
  },
  {
    "code": "CG083",
    "name": "SPERM APOPTOSIS (SPERM DNA FRAGMENTATION ) - (Outlab)",
    "mrp": 8560,
    "category": "test"
  },
  {
    "code": "AM044",
    "name": "Sperm Chromatin Dispersion Analysis (SCDA) - (Outlab)",
    "mrp": 7150,
    "category": "test"
  },
  {
    "code": "CG038",
    "name": "SPERM FISH - (Outlab)",
    "mrp": 5440,
    "category": "test"
  },
  {
    "code": "CASSM",
    "name": "SPUTUM CULTURE AND SENSITIVITY (MANUAL)",
    "mrp": 687,
    "category": "test"
  },
  {
    "code": "MIC02",
    "name": "SPUTUM CULTURE AND SUSCEPTIBILITY",
    "mrp": 940,
    "category": "test"
  },
  {
    "code": "CYT18",
    "name": "Sputum for malignant cells - INLAB",
    "mrp": 1500,
    "category": "test"
  },
  {
    "code": "AM307",
    "name": "Stress Cytogenetics for Chromosomal Breakage Syndromes with karyotyping - (Outlab)",
    "mrp": 9460,
    "category": "test"
  },
  {
    "code": "AM308",
    "name": "Synovial Fluid Analysis - (Outlab)",
    "mrp": 1320,
    "category": "test"
  },
  {
    "code": "YB1203",
    "name": "Synovial Sarcoma /SS18 Gene Rearrangement, t(X;18)(p11;q11) - (Outlab)",
    "mrp": 11265,
    "category": "test"
  },
  {
    "code": "TB-WGS",
    "name": "TB - WHOLE GENOME SEQUENCING",
    "mrp": 9064,
    "category": "test"
  },
  {
    "code": "TB003",
    "name": "TB MDR SCREEN (LPA)",
    "mrp": 3615,
    "category": "test"
  },
  {
    "code": "TB001",
    "name": "TB PCR",
    "mrp": 2055,
    "category": "test"
  },
  {
    "code": "TB004",
    "name": "TB XDR SCREEN (LPA)",
    "mrp": 3615,
    "category": "test"
  },
  {
    "code": "SNL37",
    "name": "TEL/AML1 (ALL) - (Outlab)",
    "mrp": 5415,
    "category": "test"
  },
  {
    "code": "AM310",
    "name": "Thrombophilia Panel - (Outlab)",
    "mrp": 8360,
    "category": "test"
  },
  {
    "code": "LITMS",
    "name": "TMS Tandem Mass Spectrometry - (Outlab)",
    "mrp": 5500,
    "category": "test"
  },
  {
    "code": "SNL46",
    "name": "TORCH PANEL QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 4780,
    "category": "test"
  },
  {
    "code": "HIS11",
    "name": "Total Hysterectomy of Uterus including uterus-Cx-both FT-Both Ovaries - INLAB",
    "mrp": 5160,
    "category": "test"
  },
  {
    "code": "SNL16",
    "name": "TOXOPLASMA QUALITATIVE REAL TIME PCR - (Outlab)",
    "mrp": 1815,
    "category": "test"
  },
  {
    "code": "AM312",
    "name": "TPMT Activity (Thiopurine Methyl Transferase) - (Outlab)",
    "mrp": 6490,
    "category": "test"
  },
  {
    "code": "SNL55",
    "name": "TPMT GENOTYPING AND TOXICITY TEST (PHARMACOGENOMICS) - (Outlab)",
    "mrp": 4142,
    "category": "test"
  },
  {
    "code": "KH076",
    "name": "Trephine bone marrow biopsy - (Outlab)",
    "mrp": 3460,
    "category": "test"
  },
  {
    "code": "LITRI",
    "name": "TRIPLE MARKER (AUTODELFIA) SECOND TRIMESTER - OUTLAB - (Outlab)",
    "mrp": 3095,
    "category": "test"
  },
  {
    "code": "SNL39",
    "name": "TRISOMY 12 (CLL) - (Outlab)",
    "mrp": 4065,
    "category": "test"
  },
  {
    "code": "SNL40",
    "name": "TRISOMY 8 - (Outlab)",
    "mrp": 4065,
    "category": "test"
  },
  {
    "code": "HIS09",
    "name": "Tumour-Mass histopathology with Surgical margins study -INLAB",
    "mrp": 4915,
    "category": "test"
  },
  {
    "code": "AM145",
    "name": "Urea - 24hrs Urine - (Outlab)",
    "mrp": 330,
    "category": "test"
  },
  {
    "code": "AM146",
    "name": "Uric Acid - 24hrs Urine - (Outlab)",
    "mrp": 330,
    "category": "test"
  },
  {
    "code": "AM147",
    "name": "Uric Acid - Urine - (Outlab)",
    "mrp": 330,
    "category": "test"
  },
  {
    "code": "AM148",
    "name": "Urinary 17-Ketosteroids 24 hours - (Outlab)",
    "mrp": 6820,
    "category": "test"
  },
  {
    "code": "AM314",
    "name": "Urinary Oxalate and Creatinine 24 Hours - (Outlab)",
    "mrp": 300,
    "category": "test"
  },
  {
    "code": "CASUM",
    "name": "URINE CULTURE AND SENSITIVITY (MANUAL)",
    "mrp": 687,
    "category": "test"
  },
  {
    "code": "AM315",
    "name": "Urine for Chyle - (Outlab)",
    "mrp": 660,
    "category": "test"
  },
  {
    "code": "DNA12",
    "name": "URINE OCCULT BLOOD - (Outlab)",
    "mrp": 231,
    "category": "test"
  },
  {
    "code": "AM335",
    "name": "Vimta Thalcheck - (Outlab)",
    "mrp": 2040,
    "category": "test"
  },
  {
    "code": "AM317",
    "name": "Von Willebrand Factor (vWF) - Antigen (outlab) - (Outlab)",
    "mrp": 11880,
    "category": "test"
  },
  {
    "code": "AM025",
    "name": "Weil - Felix test - (Outlab)",
    "mrp": 1080,
    "category": "test"
  },
  {
    "code": "SNM119",
    "name": "Whole Exome sequencing - (Outlab)",
    "mrp": 43215,
    "category": "test"
  },
  {
    "code": "LIWES",
    "name": "Whole Exome Sequencing Peripheral Blood - (Outlab)",
    "mrp": 34660,
    "category": "test"
  },
  {
    "code": "CG085",
    "name": "Y CHROMOSOME MICRODELETION PCR FOR 30 MUTATIONS - (Outlab)",
    "mrp": 18080,
    "category": "test"
  },
  {
    "code": "LIYMI",
    "name": "Y-Microdeletions - (Outlab)",
    "mrp": 6790,
    "category": "test"
  },
  {
    "code": "AM319",
    "name": "Zinc - Random Urine - (Outlab)",
    "mrp": 2310,
    "category": "test"
  }
];

export const initialProducts: Product[] = rawPdfCatalogue.map((item, idx) => {
  const cleanCodeId = item.code.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return {
    id: `pdf-${cleanCodeId}-${idx}`,
    test_code: item.code,
    name: item.name,
    name_bn: item.name_bn || item.name,
    category: item.category,
    mrp: item.mrp,
    discount_type: 'none',
    discount_value: 0,
    final_price: item.mrp,
    description:
      item.description ||
      `Official Thyrocare NABL accredited diagnostic ${item.category} (Code: ${item.code}). Home sample collection available in Hariharpara.`,
    description_bn:
      item.description_bn ||
      `থাইরোকেয়ার অনুমোদিত NABL স্বীকৃত ডায়াগনস্টিক পরীক্ষা (Test Code: ${item.code})। হরিহরপাড়ায় হোম কালেকশন সুবিধা উপলব্ধ।`,
    fasting_required: item.fasting ?? (item.category === 'package' && !item.name.includes('NON FASTING')),
    fasting_duration: item.fasting ? '10-12 hours fasting preferred' : 'No special fasting required',
    sample_type: item.sample || (item.name.toUpperCase().includes('URINE') ? 'Urine Sample' : item.name.toUpperCase().includes('STOOL') ? 'Stool Sample' : 'Blood / Serum'),
    turnaround_time: item.tat || '24-36 Hours',
    parameters_count: item.params || (item.category === 'package' ? 60 : item.category === 'profile' ? 5 : 1),
    included_tests: item.included,
    is_popular: Boolean(item.popular),
    is_active: true
  };
});
