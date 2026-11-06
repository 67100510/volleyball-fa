// ข้อมูลรองเท้าวอลเลย์บอล Mizuno ทั้ง 4 รุ่น
const collectionData = {
    "wave-z8": {
        name: "Wave Lightning Z8",
        category: "รองเท้าวอลเลย์บอล (สายสปีด)",
        maker: "D-Flex Groove & Mizuno Wave",
        makerLabel: "เทคโนโลยีหลัก",
        description: "รองเท้าตระกูลซิกเนเจอร์ตัวท็อป โดดเด่นเรื่องความเบาและความคล่องตัวสูง ช่วยให้ผู้เล่นเปลี่ยนทิศทาง พุ่งรับ และสไลด์ตัวได้อย่างรวดเร็วทันใจในสนามแข่งขันจริง",
        story: "รุ่นยอดฮิตที่นักกีฬาทีมชาติหลายคนเลือกใส่ เพราะช่วยให้การเคลื่อนไหวหน้าเน็ตมีความไวและแม่นยำสูง พื้นรองเท้าเกาะสนามได้ดีเยี่ยมโดยไม่สูญเสียการทรงตัว",
        image: "assets/images/collection/Z8.png",
        related: [
            { id: "momentum-pro", name: "Wave Momentum Pro", caption: "ซับแรงกระแทกขั้นสุด สายเทกออฟ", image: "assets/images/collection/Moment.png" },
            { id: "wave-dimension", name: "Wave Dimension", caption: "มั่นคงทุกการสไลด์บล็อกหน้าเน็ต", image: "assets/images/collection/Dimsion.png" }
        ]
    },
    "wave-ignite": {
        name: "Wave Ignite",
        category: "รองเท้าวอลเลย์บอล (สายกระชับ)",
        maker: "Mizuno Wave Plate",
        makerLabel: "เทคโนโลยีหลัก",
        description: "ออกแบบมาเพื่อให้ความกระชับและโอบอุ้มเท้าได้อย่างมั่นคง ลดอาการบาดเจ็บและช่วยทรงตัวได้ดีเยี่ยมในทุกจังหวะของการกระโดดและลงพื้น",
        story: "ใส่สบาย กระชับข้อเท้า ให้ความรู้สึกมั่นใจเวลาเทกออฟและลงสู่พื้นสนาม เหมาะกับผู้เล่นที่ต้องการความแน่นกระชับเป็นพิเศษ",
        image: "assets/images/collection/pro.png",
        related: [
            { id: "wave-z8", name: "Wave Lightning Z8", caption: "สายสปีดตัวท็อป คล่องตัวสูงสุด", image: "assets/images/collection/Z8.png" },
            { id: "momentum-pro", name: "Wave Momentum Pro", caption: "ซับแรงกระแทกขั้นสุด สายเทกออฟ", image: "assets/images/collection/Moment.png" }
        ]
    },
    "momentum-pro": {
        name: "Wave Momentum Pro",
        category: "รองเท้าวอลเลย์บอล (สายกระโดดตบ)",
        maker: "Mizuno Enerzy",
        makerLabel: "เทคโนโลยีหลัก",
        description: "สุดยอดความนุ่มสบายและการซับแรงกระแทกขั้นสูงสุด เหมาะสำหรับผู้เล่นตำแหน่งหัวเสาและบีหลังที่ต้องกระโดดทำคะแนนซ้ำๆ ตลอดทั้งเกม",
        story: "มีเทคโนโลยีซับแรงกระแทกที่ดีเยี่ยม ช่วยเซฟเข่าและข้อต่อได้ดีมากเวลาต้องกระโดดตบหนักๆ ช่วยลดอาการล้าของกล้ามเนื้อได้ดี",
        image: "assets/images/collection/Moment.png",
        related: [
            { id: "wave-z8", name: "Wave Lightning Z8", caption: "สายสปีดตัวท็อป คล่องตัวสูงสุด", image: "assets/images/collection/z8.png" },
            { id: "wave-dimension", name: "Wave Dimension", caption: "มั่นคงทุกการสไลด์บล็อกหน้าเน็ต", image: "assets/images/collection/Dimsion.png" }
        ]
    },
    "wave-dimension": {
        name: "Wave Dimension",
        category: "รองเท้าวอลเลย์บอล (สายบล็อก)",
        maker: "Stability Wave",
        makerLabel: "เทคโนโลยีหลัก",
        description: "ออกแบบมาเพื่อความมั่นคงสูงสุดในการทรงตัว รองรับแรงกระแทกจากการลงพื้นหลังขึ้นบล็อกหน้าเน็ตได้อย่างยอดเยี่ยม",
        story: "เหมาะสำหรับบล็อกเกอร์และบอลเร็วที่ต้องสไลด์ตัวบล็อกซ้ายขวา ช่วยให้มั่นใจว่าข้อเท้าจะไม่พลิกและทรงตัวได้อย่างมั่นคง",
        image: "assets/images/collection/Dimsion.png",
        related: [
            { id: "wave-z8", name: "Wave Lightning Z8", caption: "สายสปีดตัวท็อป คล่องตัวสูงสุด", image: "assets/images/collection/z8.png" },
            { id: "momentum-pro", name: "Wave Momentum Pro", caption: "ซับแรงกระแทกขั้นสุด สายเทกออฟ", image: "assets/images/collection/Moment.png" }
        ]
    }
};

// ฟังก์ชันดึงค่า URL Parameter มาแสดงผล
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get("id");

    const item = collectionData[itemId];

    if (!item) {
        document.getElementById("detail-content").hidden = true;
        document.getElementById("not-found").hidden = false;
        return;
    }

    // เติมข้อมูลลงในหน้า HTML
    document.getElementById("detail-title").textContent = item.name;
    document.getElementById("detail-image").src = item.image;
    document.getElementById("detail-image").alt = item.name;
    document.querySelector("[data-field='description']").textContent = item.description;
    document.querySelector("[data-field='category']").textContent = item.category;
    document.querySelector("[data-field='maker']").textContent = item.maker;
    document.querySelector("[data-field='makerLabel']").textContent = item.makerLabel;
    document.querySelector("[data-field='story']").textContent = item.story;

    // ข้อมูลเชื่อมโยง (Related items)
    if (item.related && item.related.length > 0) {
        document.getElementById("related-link").href = `detail.html?id=${item.related[0].id}`;
        document.getElementById("related-image").src = item.related[0].image;
        document.getElementById("related-name").textContent = item.related[0].name;
        document.getElementById("related-caption").textContent = item.related[0].caption;

        if (item.related[1]) {
            document.getElementById("related-link-2").href = `detail.html?id=${item.related[1].id}`;
            document.getElementById("related-image-2").src = item.related[1].image;
            document.getElementById("related-name-2").textContent = item.related[1].name;
            document.getElementById("related-caption-2").textContent = item.related[1].caption;
        }
    }
});