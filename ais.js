// Format: [nama, url, fungsi, "fitur1|fitur2|fitur3"]
// Tambah AI baru: salin satu baris, ubah isinya. Tambah kategori: buat key baru.
const AI_DATA = {
"Chatbot & Asisten": [
["ChatGPT","https://chatgpt.com","Asisten AI serbaguna dari OpenAI","Tanya jawab|Analisis file|Buat gambar"],
["Claude","https://claude.ai","Asisten AI dari Anthropic untuk menulis, riset, dan coding","Konteks panjang|Artifacts|Analisis dokumen"],
["Gemini","https://gemini.google.com","Asisten AI Google yang terhubung ke layanan Google","Multimodal|Integrasi Workspace|Deep Research"],
["Microsoft Copilot","https://copilot.microsoft.com","Asisten AI Microsoft untuk web dan Office","Pencarian web|Buat gambar|Integrasi Windows"],
["Grok","https://grok.com","Chatbot AI dari xAI dengan akses data real-time","Info terkini|Analisis gambar|Mode penalaran"],
["Perplexity","https://www.perplexity.ai","Mesin pencari AI yang menjawab dengan sumber","Jawaban bersumber|Pro Search|Koleksi riset"],
["DeepSeek","https://chat.deepseek.com","Chatbot AI dengan model penalaran dan coding","Penalaran|Coding|Model open-weight"],
["Le Chat","https://chat.mistral.ai","Asisten AI dari Mistral","Cepat|Pencarian web|Canvas"],
["Meta AI","https://www.meta.ai","Asisten AI dari Meta","Chat|Buat gambar|Terhubung ke medsos Meta"],
["Poe","https://poe.com","Satu tempat untuk memakai banyak model AI","Banyak model|Bot buatan pengguna|Bandingkan jawaban"],
["Character.AI","https://character.ai","Ngobrol dengan karakter AI","Karakter kustom|Roleplay|Suara"],
["Pi","https://pi.ai","Teman ngobrol AI yang personal","Percakapan suara|Dukungan harian|Gaya santai"]
],
"Gambar": [
["Midjourney","https://www.midjourney.com","Generator gambar artistik dari teks","Gaya sinematik|Upscale|Variasi gambar"],
["Leonardo.Ai","https://leonardo.ai","Studio gambar AI untuk aset game dan desain","Model kustom|Canvas editor|Gambar ke video"],
["Adobe Firefly","https://firefly.adobe.com","Gambar AI dari Adobe, aman untuk komersial","Generative Fill|Teks efek|Integrasi Adobe"],
["Ideogram","https://ideogram.ai","Generator gambar dengan teks yang akurat","Tipografi|Poster|Style reference"],
["Stability AI","https://stability.ai","Pembuat Stable Diffusion, model gambar open source","Open source|API|Gambar ke gambar"],
["Playground","https://playground.com","Editor gambar AI untuk desain dan poster","Template|Edit via chat|Logo"],
["Krea","https://www.krea.ai","Gambar dan video AI real-time","Generasi real-time|Upscale|Enhancer"],
["Clipdrop","https://clipdrop.co","Kumpulan alat edit gambar AI","Hapus objek|Ganti background|Relight"],
["Remove.bg","https://www.remove.bg","Hapus background foto otomatis","Sekali klik|Unduh HD|API"]
],
"Video": [
["Runway","https://runwayml.com","Studio video AI untuk generasi dan edit","Teks ke video|Gambar ke video|Motion brush"],
["Pika","https://pika.art","Pembuat video AI dari teks atau gambar","Efek kreatif|Lip sync|Gambar ke video"],
["Luma Dream Machine","https://lumalabs.ai","Video AI sinematik dari teks dan gambar","Gerak kamera|Keyframe|3D capture"],
["Kling AI","https://klingai.com","Generator video AI dari Kuaishou","Teks ke video|Gambar ke video|Efek"],
["Sora","https://sora.com","Generator video dari OpenAI","Teks ke video|Remix|Storyboard"],
["HeyGen","https://www.heygen.com","Video dengan avatar AI dan dubbing","Avatar|Terjemah video|Klon suara"],
["Synthesia","https://www.synthesia.io","Video presenter AI untuk pelatihan dan bisnis","Avatar|Multibahasa|Template"],
["Descript","https://www.descript.com","Edit video dan audio lewat transkrip","Edit via teks|Hapus kata isian|Studio Sound"],
["CapCut","https://www.capcut.com","Editor video dengan fitur AI","Auto caption|Template|Hapus background"],
["Opus Clip","https://www.opus.pro","Potong video panjang jadi klip pendek viral","Klip otomatis|Caption|Skor viral"]
],
"Audio & Musik": [
["ElevenLabs","https://elevenlabs.io","Text-to-speech dan klon suara realistis","Banyak bahasa|Klon suara|Dubbing"],
["Suno","https://suno.com","Buat lagu lengkap dari teks","Vokal AI|Banyak genre|Lirik otomatis"],
["Udio","https://www.udio.com","Generator musik AI berkualitas tinggi","Teks ke lagu|Perpanjang lagu|Remix"],
["Murf","https://murf.ai","Voiceover AI untuk video dan presentasi","Banyak suara|Editor timeline|Multibahasa"],
["Otter","https://otter.ai","Transkripsi dan catatan rapat otomatis","Transkrip live|Ringkasan|Pencarian"],
["Adobe Podcast","https://podcast.adobe.com","Perbaiki kualitas rekaman suara","Enhance Speech|Hapus noise|Editor"],
["LALAL.AI","https://www.lalal.ai","Pisahkan vokal dan instrumen dari lagu","Stem splitter|Hapus noise|Batch"]
],
"Coding": [
["GitHub Copilot","https://github.com/features/copilot","Asisten coding langsung di editor","Autocomplete|Chat kode|Agent mode"],
["Cursor","https://cursor.com","Editor kode berbasis AI","Edit multi-file|Chat codebase|Agent"],
["Claude Code","https://claude.com/product/claude-code","Agen coding di terminal dari Anthropic","Baca repo|Edit file|Jalankan perintah"],
["Replit","https://replit.com","IDE online dengan AI untuk bikin app","Agent|Hosting|Kolaborasi"],
["Windsurf","https://windsurf.com","IDE AI dengan agen coding","Cascade|Multi-file|Preview"],
["v0","https://v0.dev","Buat UI web dari prompt","React|Tailwind|Deploy"],
["Bolt","https://bolt.new","Bangun dan deploy web app dari prompt","Full-stack|Browser IDE|Deploy"],
["Lovable","https://lovable.dev","Bikin aplikasi web lewat percakapan","Integrasi GitHub|Database|Deploy"],
["Tabnine","https://www.tabnine.com","Asisten kode dengan fokus privasi","Autocomplete|Model privat|Test generation"],
["Hugging Face","https://huggingface.co","Hub model, dataset, dan demo AI open source","Model hub|Spaces|Datasets"]
],
"Riset & Produktivitas": [
["NotebookLM","https://notebooklm.google","Tanya jawab dari dokumen yang Anda unggah","Ringkasan|Audio overview|Sitasi sumber"],
["Notion AI","https://www.notion.com/product/ai","Asisten AI di dalam workspace Notion","Ringkas catatan|Tulis draf|Cari lintas halaman"],
["Elicit","https://elicit.com","Asisten riset untuk makalah ilmiah","Cari paper|Ekstrak data|Ringkasan"],
["Consensus","https://consensus.app","Mesin pencari jawaban berbasis penelitian","Hasil ilmiah|Consensus meter|Sitasi"],
["Scite","https://scite.ai","Cek bagaimana makalah dikutip","Smart citations|Asisten riset|Dashboard"],
["Gamma","https://gamma.app","Buat presentasi dan dokumen dengan AI","Slide otomatis|Template|Ekspor PPT"],
["Zapier","https://zapier.com","Otomasi alur kerja antar aplikasi","Ribuan integrasi|AI agents|Tanpa kode"],
["Fireflies","https://fireflies.ai","Notulen rapat otomatis","Rekam rapat|Ringkasan|Action items"],
["ChatPDF","https://www.chatpdf.com","Tanya jawab langsung dengan file PDF","Ringkas PDF|Sitasi halaman|Multi bahasa"]
],
"Penulisan & Bahasa": [
["Grammarly","https://www.grammarly.com","Cek tata bahasa dan gaya tulisan","Koreksi|Nada tulisan|Parafrase"],
["QuillBot","https://quillbot.com","Parafrase, ringkas, dan cek gramatika","Paraphraser|Summarizer|Citation"],
["Jasper","https://www.jasper.ai","AI untuk konten marketing","Brand voice|Template|Kampanye"],
["Copy.ai","https://www.copy.ai","Otomasi copywriting dan alur go-to-market","Template|Workflow|Brand voice"],
["Writesonic","https://writesonic.com","Penulis artikel dan iklan AI","Artikel SEO|Iklan|Chatsonic"],
["DeepL","https://www.deepl.com","Terjemahan AI yang natural","Terjemah teks|Dokumen|DeepL Write"],
["Wordtune","https://www.wordtune.com","Tulis ulang kalimat agar lebih jelas","Rewrite|Ringkas|Ubah nada"],
["Sudowrite","https://www.sudowrite.com","Asisten menulis fiksi","Lanjutkan cerita|Brainstorm|Deskripsi"]
],
"Desain & Web": [
["Canva","https://www.canva.com","Desain grafis dengan fitur Magic AI","Magic Design|Template|Edit foto"],
["Figma","https://www.figma.com","Desain UI kolaboratif dengan fitur AI","Prototyping|Auto layout|Figma Make"],
["Framer","https://www.framer.com","Bangun dan publish website dengan AI","Generate halaman|Animasi|Hosting"],
["Uizard","https://uizard.io","Ubah sketsa dan prompt jadi desain UI","Sketsa ke UI|Template|Prototipe"],
["Looka","https://looka.com","Pembuat logo dan brand kit AI","Logo|Brand kit|Kartu nama"],
["Khroma","https://www.khroma.co","Generator palet warna dengan AI","Palet warna|Personalisasi|Kontras"]
],
"Data & Bisnis": [
["Julius AI","https://julius.ai","Analisis data dan grafik lewat chat","Unggah CSV|Chart|Statistik"],
["Hex","https://hex.tech","Notebook data kolaboratif dengan AI","SQL|Python|Dashboard"],
["Rows","https://rows.com","Spreadsheet dengan analisis AI","Integrasi data|AI analyst|Chart"],
["Akkio","https://www.akkio.com","Analitik dan prediksi tanpa kode","Prediksi|Data cleaning|Laporan"],
["Humata","https://www.humata.ai","Tanya jawab dokumen panjang","Ringkas|Sitasi|Banyak file"]
]
};
