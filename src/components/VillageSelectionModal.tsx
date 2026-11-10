import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  getAllVillages, 
  PINCODES, 
  HariharparaVillage, 
  DEFAULT_VILLAGE,
  deleteCustomVillage
} from '../data/hariharparaLocations';
import { 
  Search, 
  MapPin, 
  X, 
  Check, 
  Home, 
  Info, 
  Sparkles, 
  Navigation,
  Plus,
  Star,
  Trash2
} from 'lucide-react';

export const VillageSelectionModal: React.FC = () => {
  const { 
    isLocationModalOpen, 
    setIsLocationModalOpen, 
    selectedVillage, 
    setSelectedVillage,
    saveNewAddressAndArea,
    language 
  } = useApp();

  const [search, setSearch] = useState('');
  const [selectedBlockFilter, setSelectedBlockFilter] = useState<'All' | 'Hariharpara' | 'Nowda'>('All');
  const [selectedPinFilter, setSelectedPinFilter] = useState<string>('All');
  const [isAddingNew, setIsAddingNew] = useState(false);

  // New Area form state
  const [newAreaName, setNewAreaName] = useState('');
  const [newPinCode, setNewPinCode] = useState('742166');
  const [newLandmark, setNewLandmark] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const allVillagesList = useMemo(() => {
    return getAllVillages();
  }, [refreshKey, isLocationModalOpen]);

  const filteredVillages = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allVillagesList.filter((v) => {
      // Block filter check
      if (selectedBlockFilter !== 'All') {
        const vBlock = v.block || (v.pincode === '742121' || v.pincode === '742122' ? 'Nowda' : 'Hariharpara');
        if (vBlock !== selectedBlockFilter) return false;
      }

      // PIN filter check
      if (selectedPinFilter !== 'All') {
        const matchesPrimary = v.pincode === selectedPinFilter;
        const matchesAlt = v.alternative_pincode === selectedPinFilter;
        if (!matchesPrimary && !matchesAlt) return false;
      }

      // Search query check
      if (!q) return true;
      return (
        v.name_bn.toLowerCase().includes(q) ||
        v.name_en.toLowerCase().includes(q) ||
        v.pincode.includes(q) ||
        (v.alternative_pincode && v.alternative_pincode.includes(q)) ||
        v.gram_panchayat.toLowerCase().includes(q) ||
        v.branch_post_office.toLowerCase().includes(q) ||
        v.sub_post_office.toLowerCase().includes(q) ||
        (v.block && v.block.toLowerCase().includes(q))
      );
    });
  }, [allVillagesList, search, selectedBlockFilter, selectedPinFilter]);

  if (!isLocationModalOpen) return null;

  const handleSelect = (v: HariharparaVillage) => {
    setSelectedVillage(v);
    setIsLocationModalOpen(false);
  };

  const handleSaveCustomArea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAreaName.trim()) return;

    const saved = await saveNewAddressAndArea(
      newLandmark.trim() || newAreaName.trim(),
      newPinCode.trim() || '742166',
      newAreaName.trim()
    );

    setNewAreaName('');
    setNewLandmark('');
    setIsAddingNew(false);
    setRefreshKey(k => k + 1);
    setSelectedVillage(saved);
    setIsLocationModalOpen(false);
  };

  const handleDeleteCustom = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    deleteCustomVillage(id);
    setRefreshKey(k => k + 1);
  };

  const isBn = language === 'bn';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-picker-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-rose-100 text-[#e23744] flex items-center justify-center shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 id="location-picker-title" className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                {isBn ? 'আপনার গ্রাম / এলাকা নির্বাচন করুন' : 'Select Your Village / Area'}
              </h3>
              <p className="text-xs text-slate-500">
                {isBn 
                  ? 'হরিহরপাড়া ও নওদা ব্লকের ৯০টি গ্রাম ও পিনকোড ডিরেক্টরি' 
                  : 'Hariharpara & Nowda Blocks Complete Village & PIN Directory'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsLocationModalOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar & Action to Add Custom Area */}
        <div className="p-4 sm:p-5 pb-3 border-b border-slate-100 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isBn 
                  ? 'গ্রামের নাম (আমতলা, চোয়া, নওদা, বালি...), পিন বা জিপি...' 
                  : 'Search village (Amtala, Nowda, Choa, Bali), PIN, GP...'}
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#e23744] focus:ring-2 focus:ring-rose-500/15 rounded-2xl outline-hidden transition-all text-slate-900 placeholder-slate-400 font-medium"
                autoFocus
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsAddingNew(!isAddingNew)}
              className={`px-3 py-2.5 rounded-2xl font-bold text-xs flex items-center space-x-1.5 transition-all cursor-pointer shrink-0 border ${
                isAddingNew
                  ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                  : 'bg-rose-50 hover:bg-rose-100 text-[#e23744] border-rose-200'
              }`}
              title={isBn ? 'নতুন এলাকা বা পিনকোড যোগ করুন' : 'Add custom area & PIN code'}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">{isBn ? 'নতুন এলাকা যোগ' : 'Add Area'}</span>
            </button>
          </div>

          {/* Block Level Toggle (Hariharpara vs Nowda vs All) */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => {
                setSelectedBlockFilter('All');
                setSelectedPinFilter('All');
              }}
              className={`flex-1 py-1.5 rounded-xl transition-all cursor-pointer text-center ${
                selectedBlockFilter === 'All'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? `সকল এলাকা (${allVillagesList.length})` : `All (${allVillagesList.length})`}
            </button>
            <button
              onClick={() => {
                setSelectedBlockFilter('Hariharpara');
                setSelectedPinFilter('All');
              }}
              className={`flex-1 py-1.5 rounded-xl transition-all cursor-pointer text-center ${
                selectedBlockFilter === 'Hariharpara'
                  ? 'bg-[#e23744] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'হরিহরপাড়া ব্লক (৪৮)' : 'Hariharpara (48)'}
            </button>
            <button
              onClick={() => {
                setSelectedBlockFilter('Nowda');
                setSelectedPinFilter('All');
              }}
              className={`flex-1 py-1.5 rounded-xl transition-all cursor-pointer text-center ${
                selectedBlockFilter === 'Nowda'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'নওদা ব্লক (৪২)' : 'Nowda Block (42)'}
            </button>
          </div>

          {/* Collapsible Form: Add New Area & PIN Code */}
          {isAddingNew && (
            <form onSubmit={handleSaveCustomArea} className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-200 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-900 flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#e23744] text-[#e23744]" />
                  <span>{isBn ? 'নতুন এলাকা ও পিনকোড সিস্টেমে সেভ করুন' : 'Save New Area & PIN Code'}</span>
                </span>
                <button 
                  type="button" 
                  onClick={() => setIsAddingNew(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {isBn ? 'গ্রাম / পাড়া / এলাকার নাম' : 'Area / Village Name'} <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newAreaName}
                    onChange={(e) => setNewAreaName(e.target.value)}
                    placeholder={isBn ? 'উদা: বাগানপাড়া, কলেজ মোড়...' : 'e.g. Baganpara, College More...'}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {isBn ? 'পিনকোড (৬ ডিজিট)' : 'PIN Code'} <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={newPinCode}
                    onChange={(e) => setNewPinCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="742166"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>
              </div>

              {/* Quick PIN Presets */}
              <div className="flex items-center space-x-1.5 text-[10px] overflow-x-auto pb-0.5">
                <span className="text-slate-500 font-semibold shrink-0">{isBn ? 'কুইক পিন:' : 'Presets:'}</span>
                {['742166', '742182', '742175', '742165', '742121', '742122'].map(pin => (
                  <button
                    key={pin}
                    type="button"
                    onClick={() => setNewPinCode(pin)}
                    className={`px-2 py-0.5 rounded-md font-bold transition-colors shrink-0 ${
                      newPinCode === pin 
                        ? 'bg-[#e23744] text-white' 
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {pin}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                  {isBn ? 'ল্যান্ডমার্ক / রাস্তা / ডাকঘর (ঐচ্ছিক)' : 'Landmark / Street (Optional)'}
                </label>
                <input
                  type="text"
                  value={newLandmark}
                  onChange={(e) => setNewLandmark(e.target.value)}
                  placeholder={isBn ? 'উদা: মসজিদ সংলগ্ন, হাসপাতাল রোড...' : 'e.g. Near Primary School, Main Road...'}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  {isBn ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-black bg-[#e23744] hover:bg-rose-700 text-white rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  {isBn ? 'সিস্টেমে সেভ ও সিলেক্ট করুন' : 'Save to System & Select'}
                </button>
              </div>
            </form>
          )}

          {/* Quick PIN Code Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              {isBn ? 'পিন ফিল্টার:' : 'PIN:'}
            </span>
            {PINCODES.map((pin) => {
              const isSelected = selectedPinFilter === pin;
              const label = pin === 'All' 
                ? (isBn ? 'সব পিন' : 'All') 
                : pin === '742166' 
                ? '742166 (হরিহরপাড়া)' 
                : pin === '742182' 
                ? '742182 (চোয়া)' 
                : pin === '742175' 
                ? '742175 (বিহারিয়া)' 
                : pin === '742165'
                ? '742165 (বারুইপাড়া)'
                : pin === '742121'
                ? '742121 (আমতলা/নওদা)'
                : '742122 (পাটকাবাড়ী)';

              return (
                <button
                  key={pin}
                  onClick={() => setSelectedPinFilter(pin)}
                  className={`px-2.5 py-1 rounded-xl font-bold text-[11px] shrink-0 transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-[#e23744] text-white shadow-xs' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Villages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 divide-y divide-slate-100/60 max-h-[50vh]">
          {filteredVillages.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-700">
                {isBn ? 'কোনো গ্রাম বা এলাকা পাওয়া যায়নি' : 'No village or area found'}
              </p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                {isBn 
                  ? 'উপরের "নতুন এলাকা যোগ" বোতামে ক্লিক করে আপনার নিজস্ব এলাকা ও পিনকোড সেভ করে নিতে পারেন।' 
                  : 'Click "Add Area" above to save your custom neighborhood and PIN code.'}
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedBlockFilter('All');
                  setSelectedPinFilter('All');
                }}
                className="mt-2 text-xs font-bold text-[#e23744] hover:underline cursor-pointer"
              >
                {isBn ? 'সবগুলো ফিল্টার রিসেট করুন' : 'Reset filters'}
              </button>
            </div>
          ) : (
            filteredVillages.map((v) => {
              const isSelected = selectedVillage.id === v.id;
              const isNowda = v.block === 'Nowda' || v.pincode === '742121' || v.pincode === '742122';

              return (
                <div
                  key={v.id}
                  onClick={() => handleSelect(v)}
                  className={`p-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between gap-3 group pt-3 ${
                    isSelected
                      ? 'bg-rose-50/80 border border-rose-200 text-slate-900 shadow-xs'
                      : 'hover:bg-slate-50 border border-transparent text-slate-700'
                  }`}
                >
                  <div className="flex items-start space-x-3 min-w-0">
                    <div className={`mt-0.5 w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected 
                        ? 'bg-[#e23744] text-white' 
                        : v.is_custom 
                        ? 'bg-amber-100 text-amber-700' 
                        : isNowda
                        ? 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-100'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-rose-100 group-hover:text-[#e23744]'
                    }`}>
                      {v.is_custom ? <Star className="w-3.5 h-3.5 fill-current" /> : <Home className="w-3.5 h-3.5" />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span className="font-black text-sm sm:text-base text-slate-900">
                          {v.name_bn}
                        </span>
                        {v.name_en !== v.name_bn && (
                          <span className="text-xs text-slate-500 font-medium">
                            ({v.name_en})
                          </span>
                        )}

                        {/* Block Badge */}
                        <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                          isNowda 
                            ? 'bg-indigo-100 text-indigo-900 border border-indigo-200' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {isNowda ? (isBn ? 'নওদা ব্লক' : 'Nowda Block') : (isBn ? 'হরিহরপাড়া' : 'Hariharpara')}
                        </span>

                        {/* PIN Code Badge */}
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                          v.is_custom
                            ? 'bg-purple-100 text-purple-900 border border-purple-200'
                            : v.pincode === '742121' || v.pincode === '742122'
                            ? 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                            : v.zone === 'special'
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          PIN: {v.pincode}
                        </span>

                        {v.is_custom && (
                          <span className="text-[10px] bg-rose-100 text-[#e23744] font-bold px-1.5 py-0.2 rounded-md">
                            {isBn ? '⭐ সংরক্ষিত' : '⭐ Saved Area'}
                          </span>
                        )}

                        {v.alternative_pincode && (
                          <span className="text-[10px] text-slate-400 font-medium">
                            / {v.alternative_pincode}
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5 flex-wrap">
                        <span>🏛️ {v.gram_panchayat}</span>
                        <span>•</span>
                        <span>📮 {v.branch_post_office}</span>
                      </div>

                      {v.note_bn && (
                        <div className="text-[10px] text-amber-700 font-medium mt-0.5 flex items-center space-x-1">
                          <Info className="w-3 h-3 shrink-0" />
                          <span>{v.note_bn}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Check Icon */}
                  <div className="flex items-center space-x-2 shrink-0">
                    {v.is_custom && (
                      <button
                        onClick={(e) => handleDeleteCustom(e, v.id)}
                        className="p-1 text-slate-300 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                        title={isBn ? 'ডিলিট করুন' : 'Delete'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {isSelected ? (
                      <div className="w-6 h-6 rounded-full bg-[#e23744] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-slate-200 group-hover:border-rose-400 flex items-center justify-center">
                        <span className="text-xs text-slate-300 group-hover:text-[#e23744]">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Info & Quick Selection */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-600">
            <Sparkles className="w-4 h-4 text-[#e23744] shrink-0" />
            <span>
              {isBn 
                ? 'হরিহরপাড়া ও নওদা ব্লকের প্রতিটি গ্রামে ফ্রি হোম স্যাম্পল কালেকশন' 
                : 'Free Home Collection across all villages in Hariharpara & Nowda'}
            </span>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={() => handleSelect(DEFAULT_VILLAGE)}
              className="flex-1 sm:flex-none px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-xl transition-all cursor-pointer text-xs flex items-center justify-center space-x-1 shadow-2xs"
            >
              <Navigation className="w-3.5 h-3.5 text-[#e23744]" />
              <span>{isBn ? 'হরিহরপাড়া' : 'Hariharpara'}</span>
            </button>
            <button
              onClick={() => {
                const amtala = allVillagesList.find(v => v.id === 'amtala_bazar');
                if (amtala) handleSelect(amtala);
              }}
              className="flex-1 sm:flex-none px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-xl transition-all cursor-pointer text-xs flex items-center justify-center space-x-1 shadow-2xs"
            >
              <Navigation className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isBn ? 'আমতলা (নওদা)' : 'Amtala (Nowda)'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
