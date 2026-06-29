const contents = [
  { level: 'light', levelText: 'Ringan', ticker: 'IHSG', title: 'Market mood hari ini', body: 'IHSG sedang bergerak hati-hati. Saat market belum jelas, tugas utama bukan mencari cuan cepat, tetapi menjaga keputusan tetap rasional.', insight: 'Mindful tip: jangan buka posisi hanya karena takut tertinggal.' },
  { level: 'light', levelText: 'Ringan', ticker: 'BBCA.JK', title: 'Fakta cepat BBCA', body: 'Saham big cap sering menjadi tempat investor mencari stabilitas saat pasar sedang tidak pasti.', insight: 'Pertanyaan kecil: apakah harga naik didukung volume, atau hanya pantulan biasa?' },
  { level: 'medium', levelText: 'Sedang', ticker: 'ADRO.JK', title: 'Foreign flow mulai perlu diamati', body: 'Jika harga naik tetapi foreign flow melemah, artinya kenaikan perlu dikonfirmasi lagi. Jangan hanya membaca candle hijau.', insight: 'Lihat kombinasi: harga, volume, foreign flow, dan area resistance.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Quiz', title: 'Volume naik, harga turun. Artinya?', body: 'Kemungkinan ada tekanan jual besar. Namun perlu dicek apakah terjadi di area support atau resistance.', insight: 'Jawaban singkat: belum tentu buruk, tetapi harus waspada.' },
  { level: 'light', levelText: 'Ringan', ticker: 'BBRI.JK', title: 'Bank besar dan sentimen pasar', body: 'Saham perbankan besar sering menjadi indikator kepercayaan investor terhadap ekonomi domestik.', insight: 'Saat bank besar kompak melemah, perhatikan kondisi IHSG secara keseluruhan.' },
  { level: 'heavy', levelText: 'Berat', ticker: 'Wyckoff', title: 'Akumulasi atau distribusi?', body: 'Dalam Wyckoff, kenaikan harga dengan volume melemah dapat menjadi sinyal lemah jika terjadi di area resistance. Namun konfirmasi tetap dibutuhkan.', insight: 'Jangan simpulkan fase hanya dari satu candle. Baca struktur harga.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Mindful Break', title: 'Tarik napas dulu', body: 'Sebelum lanjut scroll, tanyakan: saya sedang mencari insight atau hanya mencari sensasi market?', insight: 'Jika sudah lelah, simpan sahamnya dan analisis lagi nanti.' },
  { level: 'medium', levelText: 'Sedang', ticker: 'TLKM.JK', title: 'Sideways bukan berarti buruk', body: 'Saham sideways bisa menjadi fase istirahat. Yang penting adalah melihat apakah volume jual mulai mengecil atau justru membesar.', insight: 'Sideways sehat biasanya tidak merusak support utama.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Quote', title: 'Investor tenang menang lebih lama', body: 'Dalam market, yang paling mahal bukan informasi, tetapi kemampuan menunggu konfirmasi.', insight: 'Tidak semua peluang harus diambil.' },
  { level: 'medium', levelText: 'Sedang', ticker: 'ANTM.JK', title: 'Komoditas itu sensitif sentimen', body: 'Saham komoditas sering bergerak mengikuti harga global, kurs, dan sentimen ekspor. Jadi jangan hanya lihat chart lokal.', insight: 'Tambahkan konteks makro sebelum mengambil keputusan.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Polling', title: 'Kamu tipe investor apa?', body: 'A. Sabar menunggu support. B. Suka breakout. C. Sering FOMO. D. Masih belajar membaca chart.', insight: 'Aplikasi ini nanti bisa menyesuaikan feed berdasarkan pola kamu.' },
  { level: 'heavy', levelText: 'Berat', ticker: 'Bandarmology', title: 'Akumulasi besar tidak selalu langsung naik', body: 'Jika broker besar mengumpulkan saham, harga bisa tetap datar dulu. Kenaikan biasanya muncul setelah supply mulai menipis.', insight: 'Pantau konsistensi akumulasi, bukan hanya satu hari transaksi.' },
  { level: 'light', levelText: 'Ringan', ticker: 'BMRI.JK', title: 'Cek satu hal saja', body: 'Hari ini cukup cek apakah harga bertahan di atas support terdekat. Jangan semua indikator dibaca sekaligus.', insight: 'Satu pertanyaan jelas lebih baik daripada lima indikator yang membingungkan.' },
  { level: 'medium', levelText: 'Sedang', ticker: 'PTBA.JK', title: 'Dividen bisa menarik, tapi...', body: 'Saham dividen tetap perlu dilihat tren bisnis dan harga komoditasnya. Dividen besar tidak selalu berarti harga akan naik.', insight: 'Bedakan alasan beli: dividen, trading, atau investasi jangka panjang.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Edukasi', title: 'Apa itu support?', body: 'Support adalah area harga yang sering menjadi tempat pembeli mulai masuk. Bukan garis sakti, tetapi zona perhatian.', insight: 'Jika support jebol dengan volume besar, risiko biasanya meningkat.' },
  { level: 'medium', levelText: 'Sedang', ticker: 'ASII.JK', title: 'Konglomerasi perlu dibaca lebih luas', body: 'ASII tidak hanya soal otomotif. Perhatikan juga komoditas, alat berat, keuangan, dan konsumsi domestik.', insight: 'Untuk saham grup besar, narasi bisnis sering lebih penting dari satu indikator teknikal.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Mindful Check', title: 'Sudah cukup insight?', body: 'Kalau kamu sudah menemukan 1–2 saham untuk dianalisis, tidak perlu scroll terlalu lama.', insight: 'Tujuan feed ini: membantu fokus, bukan membuat candu.' },
  { level: 'heavy', levelText: 'Berat', ticker: 'Risk', title: 'Sinyal palsu itu normal', body: 'Breakout tanpa volume, foreign buy satu hari, atau candle besar tanpa follow-up bisa menjadi sinyal palsu.', insight: 'Gunakan aturan: tunggu konfirmasi, tentukan risiko, baru ambil keputusan.' },
  { level: 'light', levelText: 'Ringan', ticker: 'Meme teks', title: 'Investor: “Saya long term”', body: 'Harga turun 2% langsung buka chart 15 menit. Tenang, itu manusiawi.', insight: 'Humor membantu, tapi keputusan tetap harus disiplin.' },
  { level: 'medium', levelText: 'Sedang', ticker: 'Watchlist', title: 'Pilih 5 saham saja dulu', body: 'Untuk awal, jangan pantau terlalu banyak saham. Pilih 5 saham utama agar otak tidak cepat lelah.', insight: 'Fokus kecil sering menghasilkan analisis yang lebih baik.' }
];

const feed = document.getElementById('feed');

function renderFeed() {
  feed.innerHTML = contents.map((item, index) => `
    <article class="card">
      <div>
        <div class="card-top">
          <span class="badge ${item.level}">${item.levelText}</span>
          <span class="ticker">#${String(index + 1).padStart(2, '0')}</span>
        </div>
        <p class="ticker">${item.ticker}</p>
        <h2 class="title">${item.title}</h2>
        <p class="body">${item.body}</p>
        <div class="insight-box">${item.insight}</div>
      </div>
      <div>
        <div class="action-row">
          <button onclick="saveAction(${index})">Simpan</button>
          <button onclick="deepDive(${index})">Bahas</button>
        </div>
        <p class="disclaimer">Bukan rekomendasi beli atau jual. Gunakan sebagai bahan belajar dan analisis tambahan.</p>
      </div>
    </article>
  `).join('');
}

function saveAction(index) {
  alert(`Konten #${index + 1} disimpan untuk prototype.`);
}

function deepDive(index) {
  alert(`Nanti fitur ini bisa membuka AI explanation untuk: ${contents[index].ticker}`);
}

document.getElementById('resetBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderFeed();
