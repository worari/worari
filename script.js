
const apiUrl = "https://script.google.com/macros/s/AKfycby5baH4AErWyPJWppos2W5vNi_WZ2YmCsDMfja6Y4_5gXUDqhfaRrTO3ND4OpsNhuOy/exec";

function loadData() {
  const trackId = document.getElementById("trackId").value.trim();
  if (!trackId) {
    alert("กรุณากรอกหมายเลข ปชช.");
    return;
  }

  fetch(`${apiUrl}?id=${trackId}`)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("timeline");
      container.innerHTML = "";

      if (!data.result || data.result.length === 0) {
        container.innerHTML = "<p class='text-danger text-center'>ไม่พบข้อมูล</p>";
        return;
      }

      data.result.forEach(entry => {
        const html = `
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">📅 วันที่รับเรื่อง: ${entry['วันที่รับเรื่อง'] || 'ไม่ระบุ'}</h5>
              <p class="card-text"><strong>ชื่อ:</strong> ${entry['ชื่อ'] || ''} ${entry['นามสกุล'] || ''}</p>
              <p class="card-text"><strong>สถานะ:</strong> ${entry['สถานะ'] || 'รอดำเนินการ'}</p>
              <p class="card-text"><strong>หมายเหตุ:</strong> ${entry['หมายเหตุ'] || '-'}</p>
            </div>
          </div>`;
        container.innerHTML += html;

        speakThai("คุณ " + (entry['ชื่อ'] || '') + " " + (entry['นามสกุล'] || '') + " ระบบได้แสดงผลแล้วครับ");
      });
    })
    .catch(error => {
      console.error("เกิดข้อผิดพลาด:", error);
      document.getElementById("timeline").innerHTML = "<p class='text-danger text-center'>เกิดข้อผิดพลาดในการโหลดข้อมูล</p>";
    });
}

function speakThai(text) {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();
  const thaiVoice = voices.find(voice => voice.lang.startsWith("th"));
  if (thaiVoice) utterThis.voice = thaiVoice;
  synth.speak(utterThis);
}
