
import { useState } from "react";
import "./App.css";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.nabdfuture.accounting";

const services = [
  {
    number: "01",
    icon: "◈",
    title: "تطوير البرمجيات",
    description: "نبني حلولاً برمجية مخصصة تساعد الشركات على تطوير أعمالها وتحسين عملياتها.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "الأنظمة الإدارية والمحاسبية",
    description: "أنظمة ذكية لإدارة الحسابات والموارد والعمليات التجارية بكفاءة ووضوح.",
  },
  {
    number: "03",
    icon: "▣",
    title: "تطبيقات الهواتف الذكية",
    description: "تطبيقات Android وiOS بتجربة استخدام عصرية وأداء موثوق.",
  },
  {
    number: "04",
    icon: "⌁",
    title: "الحلول الرقمية",
    description: "نساعد المؤسسات على الانتقال إلى بيئة عمل رقمية أكثر مرونة وإنتاجية.",
  },
];

const features = [
  "واجهة عربية سهلة الاستخدام",
  "العمل دون الحاجة إلى اتصال بالإنترنت",
  "إدارة المبيعات والمشتريات",
  "إدارة العملاء والموردين",
  "متابعة المصروفات والإيرادات",
  "تقارير مالية وحسابات متكاملة",
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">←</span>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#home">
      <span className="brand-symbol">
        <span>N</span>
        <i />
      </span>
      <span className="brand-copy">
        <strong>نبض التقنية</strong>
        <small>NABD TECHNOLOGY</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" dir="rtl">
      <header className="header">
        <div className="container nav">
          <Brand />

          <button
            className="menu-toggle"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>الرئيسية</a>
            <a href="#about" onClick={closeMenu}>من نحن</a>
            <a href="#services" onClick={closeMenu}>خدماتنا</a>
            <a href="#products" onClick={closeMenu}>منتجاتنا</a>
            <a href="#contact" onClick={closeMenu}>تواصل معنا</a>
          </nav>

          <a className="nav-cta" href="#products">
            اكتشف منتجاتنا <Arrow />
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="container hero-inner">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="pulse-dot" />
                شركة برمجيات وحلول تقنية
              </div>

              <h1>
                نصنع التقنية
                <br />
                <span>لتصنع الفرق.</span>
              </h1>

              <p className="hero-description">
                في نبض التقنية، نحول الأفكار إلى حلول رقمية مبتكرة،
                ونبني برمجيات تساعد الأفراد والشركات على إدارة أعمالهم
                بثقة وكفاءة، نحو مستقبل أكثر تطوراً.
              </p>

              <div className="hero-actions">
                <a href="#products" className="button button-primary">
                  اكتشف منتجاتنا <Arrow />
                </a>
                <a href="#about" className="button button-outline">
                  تعرف على الشركة
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-mark">✦</div>
                <div>
                  <strong>ابتكار يصنع قيمة</strong>
                  <span>تقنية أقرب إلى احتياجات أعمالك</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="mini-brand">
                    <span className="mini-symbol">N</span>
                    <div>
                      <strong>NABD</strong>
                      <small>TECHNOLOGY</small>
                    </div>
                  </div>
                  <span className="online-status">
                    <i /> حلول رقمية
                  </span>
                </div>

                <div className="hero-card-main">
                  <div className="abstract-mark">
                    <span>N</span>
                    <i />
                  </div>
                  <span className="hero-card-caption">INNOVATION · TECHNOLOGY</span>
                  <h3>نبض المستقبل</h3>
                  <p>نبتكر اليوم، لنصنع مستقبلاً أفضل.</p>
                </div>

                <div className="hero-card-bottom">
                  <span>CREATING DIGITAL VALUE</span>
                  <span>2026 — 01</span>
                </div>
              </div>

              <div className="floating-tag tag-top">
                <span className="tag-icon">✳</span>
                <div>
                  <strong>أفكار مبتكرة</strong>
                  <small>نحو حلول أفضل</small>
                </div>
              </div>

              <div className="floating-tag tag-bottom">
                <span className="tag-icon orange">↗</span>
                <div>
                  <strong>تحول رقمي</strong>
                  <small>نطور أعمالك</small>
                </div>
              </div>

              <div className="visual-number">N°01</div>
            </div>
          </div>

          <div className="container hero-footer">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>01 / 04</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">01 — من نحن</span>
              <span className="heading-line" />
            </div>

            <div className="about-grid">
              <div>
                <h2 className="section-title">
                  التقنية ليست مجرد أدوات،
                  <span> بل طريقة لصناعة المستقبل.</span>
                </h2>
              </div>

              <div className="about-text">
                <p>
                  نبض التقنية شركة برمجيات تعمل على تطوير الحلول التقنية
                  والأنظمة الرقمية التي تجعل الأعمال أكثر تنظيماً وذكاءً.
                </p>
                <p>
                  نؤمن بأن التكنولوجيا الناجحة تبدأ بفهم احتياجات المستخدم،
                  ثم تحويلها إلى منتجات عملية تجمع بين البساطة والاحترافية
                  والموثوقية.
                </p>
                <a href="#services" className="text-link">
                  اكتشف ما نقدمه <Arrow />
                </a>
              </div>
            </div>

            <div className="values-strip">
              <div>
                <span>01</span>
                <strong>الابتكار</strong>
                <small>أفكار تتجاوز المألوف</small>
              </div>
              <div>
                <span>02</span>
                <strong>الجودة</strong>
                <small>نهتم بكل التفاصيل</small>
              </div>
              <div>
                <span>03</span>
                <strong>البساطة</strong>
                <small>تجربة سهلة وفعالة</small>
              </div>
              <div>
                <span>04</span>
                <strong>الثقة</strong>
                <small>حلول نعتمد عليها</small>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">02 — ماذا نقدم</span>
              <span className="heading-line" />
            </div>

            <div className="services-intro">
              <h2 className="section-title">
                حلول تقنية
                <span> تبدأ من احتياجك.</span>
              </h2>
              <p>
                نطور حلولاً رقمية عملية تساعدك على تنظيم أعمالك
                وتحقيق أهدافك بخطوات أكثر ذكاءً.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-decoration">↙</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">03 — منتجاتنا</span>
              <span className="heading-line" />
            </div>

            <div className="product-layout">
              <div className="product-copy">
                <span className="product-label">
                  <i /> OUR FEATURED PRODUCT
                </span>
                <h2>
                  نبض
                  <br />
                  <span>المحاسبة.</span>
                </h2>
                <p className="product-subtitle">
                  محاسبتك، أعمالك، تحت السيطرة.
                </p>
                <p className="product-description">
                  نظام محاسبي متكامل على هاتفك، صمم ليمنح أصحاب
                  الأعمال والتجار طريقة سهلة واحترافية لإدارة
                  حساباتهم ومتابعة أعمالهم من مكان واحد.
                </p>

                <ul className="feature-list">
                  {features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="product-actions">
                  <a
                    href={PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary play-button"
                  >
                    <span className="play-icon">▶</span>
                    <span>
                      <small>متوفر الآن على</small>
                      Google Play
                    </span>
                    <Arrow />
                  </a>
                </div>

                <span className="product-footnote">
                  حلول محاسبية صممت لتناسب احتياجات أعمالك.
                </span>
              </div>

              <div className="product-visual">
                <div className="product-glow" />
                <div className="phone-frame">
                  <div className="phone-island" />
                  <div className="phone-screen">
                    <div className="phone-status">
                      <span>9:41</span>
                      <span>● ● ▰</span>
                    </div>
                    <div className="phone-header">
                      <div>
                        <small>مرحباً بك في</small>
                        <strong>نبض المحاسبة</strong>
                      </div>
                      <span className="app-logo">N</span>
                    </div>
                    <div className="balance-card">
                      <small>إجمالي الأرصدة</small>
                      <strong>125,850.00</strong>
                      <span>ر.ي</span>
                      <div className="balance-decoration">✦</div>
                    </div>
                    <div className="phone-stat-row">
                      <div className="phone-stat">
                        <span>↗</span>
                        <small>الإيرادات</small>
                        <strong>45,200</strong>
                      </div>
                      <div className="phone-stat">
                        <span className="stat-orange">↘</span>
                        <small>المصروفات</small>
                        <strong>12,400</strong>
                      </div>
                    </div>
                    <div className="phone-chart">
                      <div className="chart-heading">
                        <strong>ملخص النشاط</strong>
                        <small>هذا الشهر</small>
                      </div>
                      <div className="chart-bars">
                        {[35, 55, 43, 72, 50, 88, 64, 95, 58, 76, 48, 83].map((height, i) => (
                          <span
                            key={i}
                            style={{ height: `${height}%` }}
                            className={i === 7 ? "active-bar" : ""}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="phone-bottom">
                      <span>⌂<small>الرئيسية</small></span>
                      <span>▤<small>الفواتير</small></span>
                      <span>♙<small>الحسابات</small></span>
                      <span>☰<small>المزيد</small></span>
                    </div>
                  </div>
                </div>
                <div className="phone-float float-one">
                  <span>✓</span>
                  <div>
                    <strong>إدارة أسهل</strong>
                    <small>كل حساباتك في مكان واحد</small>
                  </div>
                </div>
                <div className="phone-float float-two">
                  <span>↗</span>
                  <div>
                    <strong>Offline</strong>
                    <small>يعمل دون إنترنت</small>
                  </div>
                </div>
                <div className="product-background-text">NABD</div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="vision-section">
          <div className="vision-pattern" />
          <div className="container vision-content">
            <span className="section-kicker">OUR VISION</span>
            <h2>
              نبتكر اليوم،
              <br />
              <span>لنصنع مستقبلاً أفضل.</span>
            </h2>
            <p>
              نؤمن أن لكل فكرة عظيمة بداية، وأن التقنية هي الجسر
              الذي يحول الطموح إلى واقع.
            </p>
            <a href="#contact" className="button button-white">
              لنعمل معاً <Arrow />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-box">
              <div>
                <span className="section-kicker">LET'S CONNECT</span>
                <h2>لديك فكرة؟<br /><span>دعنا نحولها إلى واقع.</span></h2>
                <p>
                  يسعدنا التواصل معك ومناقشة احتياجاتك التقنية
                  والبحث عن الحل المناسب لأعمالك.
                </p>
              </div>
              <div className="contact-action">
                <a href="https://wa.me/" className="button button-primary">
                  تواصل معنا <Arrow />
                </a>
                <a href="https://nabdfuture.com" className="contact-domain">
                  nabdfuture.com
                </a>
              </div>
              <div className="contact-watermark">N</div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Brand light />
            <p>
              نبض التقنية — نصنع حلولاً رقمية مبتكرة،
              ونبني مستقبلاً أكثر ذكاءً.
            </p>
          </div>

          <div className="footer-links">
            <strong>روابط سريعة</strong>
            <a href="#home">الرئيسية</a>
            <a href="#about">من نحن</a>
            <a href="#services">خدماتنا</a>
            <a href="#products">منتجاتنا</a>
          </div>

          <div className="footer-links">
            <strong>منتجاتنا</strong>
            <a href={PLAY_URL} target="_blank" rel="noreferrer">
              نبض المحاسبة
            </a>
            <a href="#services">حلول البرمجيات</a>
          </div>

          <div className="footer-links">
            <strong>تواصل معنا</strong>
            <a href="https://nabdfuture.com">الموقع الإلكتروني</a>
            <a href={PLAY_URL} target="_blank" rel="noreferrer">
              Google Play
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} نبض التقنية. جميع الحقوق محفوظة.</span>
          <span>DESIGNED WITH PURPOSE <b>✦</b></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
