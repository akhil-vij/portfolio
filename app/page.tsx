import { ThemeToggle } from "@/components/ThemeToggle";
import {
  email,
  resumeHref,
  socials,
  projects,
  experience,
  stackGroups,
} from "@/lib/content";

const MONO = "var(--ff-mono)";
const SERIF = "var(--ff-serif)";

/** Repeated section header: mono index + serif title + hairline + caption. */
function SectionHeader({
  num,
  title,
  caption,
  mb = 30,
}: {
  num: string;
  title: string;
  caption: string;
  mb?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 14,
        marginBottom: mb,
      }}
    >
      <span
        style={{
          fontFamily: MONO,
          fontSize: 12,
          letterSpacing: ".08em",
          color: "var(--accent)",
          fontWeight: 500,
        }}
      >
        {num}
      </span>
      <h2
        style={{
          margin: 0,
          fontFamily: SERIF,
          fontWeight: 500,
          fontSize: "clamp(24px,2.8vw,34px)",
          letterSpacing: "-.01em",
        }}
      >
        {title}
      </h2>
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
      <span style={{ fontFamily: MONO, fontSize: 11, color: "var(--muted)" }}>
        {caption}
      </span>
    </div>
  );
}

function MonoLabel({
  children,
  mb = 6,
}: {
  children: React.ReactNode;
  mb?: number;
}) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: ".1em",
        color: "var(--muted)",
        marginBottom: mb,
      }}
    >
      {children}
    </div>
  );
}

const year = new Date().getFullYear();

export default function Page() {
  return (
    <>
      {/* ---------------------------------------------------------------- Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          borderBottom: "1px solid var(--line)",
          background: "var(--nav-bg)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <nav
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px clamp(24px,4vw,52px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#top"
            className="akv-navlink"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 9,
              textDecoration: "none",
              color: "var(--ink)",
            }}
          >
            <span
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: "-.01em",
              }}
            >
              Akhil Vij
            </span>
            <span
              className="akv-sub"
              style={{ fontFamily: MONO, fontSize: 11, color: "var(--muted)" }}
            >
              staff engineer · co-founder
            </span>
          </a>
          <div
            className="akv-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            {[
              ["approach", "#approach"],
              ["work", "#work"],
              ["experience", "#experience"],
              ["stack", "#stack"],
              ["about", "#about"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="akv-navlink"
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  color: "var(--ink2)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="akv-pill"
              style={{
                fontFamily: MONO,
                fontSize: 12,
                color: "var(--on-accent)",
                textDecoration: "none",
                background: "var(--accent)",
                padding: "8px 14px",
                borderRadius: 7,
                fontWeight: 500,
              }}
            >
              contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ------------------------------------------------------------- Hero */}
        <section
          id="top"
          className="akv-sec"
          style={{ borderBottom: "1px solid var(--line2)" }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding:
                "clamp(48px,7vw,96px) clamp(24px,4vw,52px) clamp(24px,3vw,40px)",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--dots) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          >
            <div style={{ maxWidth: "46rem", animation: "rise .6s both" }}>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  letterSpacing: ".14em",
                  color: "var(--accent)",
                  marginBottom: 22,
                }}
              >
                STAFF ENGINEER &amp; CO-FOUNDER — DELHI NCR
              </div>
              <h1
                style={{
                  margin: "0 0 24px",
                  fontFamily: SERIF,
                  fontWeight: 500,
                  fontSize: "clamp(36px,5vw,66px)",
                  lineHeight: 1.04,
                  letterSpacing: "-.015em",
                  textWrap: "balance",
                }}
              >
                I build products end-to-end —{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  from the data pipeline to the pixel.
                </em>
              </h1>
              <p
                style={{
                  margin: "0 0 26px",
                  fontSize: "clamp(15px,1.5vw,18px)",
                  color: "var(--ink2)",
                  maxWidth: "36em",
                  lineHeight: 1.6,
                  textWrap: "pretty",
                }}
              >
                Shipping AI-heavy web products across fintech, healthcare, and
                developer education. I own the whole stack — the data model, the
                backend, the interface — and the AI systems that keep the data
                honest.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  fontFamily: MONO,
                  fontSize: 12,
                  color: "var(--ink2)",
                  border: "1px solid var(--line)",
                  background: "var(--panel)",
                  padding: "8px 13px",
                  borderRadius: 20,
                  marginBottom: 26,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--st-live)",
                    boxShadow: "0 0 0 3px var(--acc-soft)",
                  }}
                />
                open to full-stack &amp; AI-systems work
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  className="akv-pill"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--on-accent)",
                    background: "var(--accent)",
                    textDecoration: "none",
                    padding: "12px 20px",
                    borderRadius: 9,
                  }}
                >
                  Start a conversation
                </a>
                <a
                  href="#work"
                  className="akv-btn-outline"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--ink)",
                    background: "transparent",
                    textDecoration: "none",
                    padding: "12px 20px",
                    borderRadius: 9,
                    border: "1px solid var(--line)",
                  }}
                >
                  See the work &#8595;
                </a>
              </div>
            </div>

            {/* Bitemporal timeline panel — hero signature element */}
            <div
              style={{
                marginTop: "clamp(36px,4.5vw,56px)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                background: "var(--panel)",
                padding: "clamp(20px,2.4vw,28px)",
                animation: "rise .6s .12s both",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11.5,
                    letterSpacing: ".1em",
                    color: "var(--muted)",
                  }}
                >
                  BITEMPORAL — ONE ENGINEER, PLOTTED OVER TIME
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: "var(--ink2)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: 2,
                        background: "var(--ink2)",
                      }}
                    />
                    role
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: 2,
                        background: "var(--accent)",
                      }}
                    />
                    current
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "var(--st-live)",
                      }}
                    />
                    product
                  </span>
                </div>
              </div>

              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: ".1em",
                  color: "var(--muted)",
                  marginBottom: 8,
                }}
              >
                CAREER
              </div>

              {/* Career bars */}
              <div
                style={{ position: "relative", height: 38, marginBottom: 10 }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "9.4%",
                    width: "62.5%",
                    top: 4,
                    height: 30,
                    background: "var(--bar-bg)",
                    border: "1px solid var(--line)",
                    borderRadius: 7,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: "var(--ink)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className="akv-bartext">
                    Informatica · Lead → Principal
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "71.9%",
                    width: "26.9%",
                    top: 4,
                    height: 30,
                    background: "var(--acc-soft)",
                    border: "1px solid var(--acc-soft-line)",
                    borderRadius: 7,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: "var(--accent)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className="akv-bartext">Agoda · Staff</span>
                </div>
              </div>

              {/* Mobile-only caption row for the bars */}
              <div
                className="akv-barcap"
                style={{
                  gap: 14,
                  flexWrap: "wrap",
                  margin: "-2px 0 10px",
                  fontFamily: MONO,
                  fontSize: 10.5,
                  color: "var(--ink2)",
                }}
              >
                <span
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 2,
                      background: "var(--bar-bg)",
                      border: "1px solid var(--line)",
                    }}
                  />
                  Informatica · Lead → Principal
                </span>
                <span
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 2,
                      background: "var(--acc-soft)",
                      border: "1px solid var(--acc-soft-line)",
                    }}
                  />
                  Agoda · Staff
                </span>
              </div>

              {/* Year axis */}
              <div
                style={{
                  position: "relative",
                  height: 22,
                  borderTop: "1px solid var(--line)",
                }}
              >
                {[
                  ["2018", "0"],
                  ["2020", "25%"],
                  ["2022", "50%"],
                  ["2024", "75%"],
                ].map(([label, left]) => (
                  <span
                    key={label}
                    style={{
                      position: "absolute",
                      left,
                      top: 6,
                      fontFamily: MONO,
                      fontSize: 10,
                      color: "var(--muted)",
                    }}
                  >
                    {label}
                  </span>
                ))}
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 6,
                    fontFamily: MONO,
                    fontSize: 10,
                    color: "var(--accent)",
                  }}
                >
                  2026 · now
                </span>
              </div>

              {/* Product dots */}
              <div
                style={{ position: "relative", height: 34, marginTop: 4 }}
              >
                {[
                  ["76%", "var(--st-live)"],
                  ["88%", "var(--st-build)"],
                  ["96%", "var(--st-pilot)"],
                ].map(([left, tone]) => (
                  <div key={left}>
                    <div
                      style={{
                        position: "absolute",
                        left,
                        top: 0,
                        width: 1,
                        height: 16,
                        background: "var(--line)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: `calc(${left} - 6px)`,
                        top: 14,
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: tone,
                        border: "2px solid var(--bg)",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Product legend */}
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  flexWrap: "wrap",
                  marginTop: 8,
                  fontFamily: MONO,
                  fontSize: 11,
                  color: "var(--ink2)",
                }}
              >
                {[
                  ["BehindScale · live", "var(--st-live)"],
                  ["MatchMyCard · in build", "var(--st-build)"],
                  ["ClinicKhata · in pilot", "var(--st-pilot)"],
                ].map(([label, tone]) => (
                  <span
                    key={label}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: tone,
                      }}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- Approach */}
        <section
          id="approach"
          className="akv-sec"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,52px)",
          }}
        >
          <SectionHeader num="01" title="Approach" caption="the edge" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: 20,
            }}
          >
            {[
              {
                letter: "A",
                title: "Systems that stay honest",
                body: "Bitemporal data models and source-traceable pipelines where every number traces back to a dated, verbatim source. Correctness isn't bolted on — it's the architecture.",
              },
              {
                letter: "B",
                title: "AI as infrastructure",
                body: "LLM extraction pipelines with validation gates that turn messy documents — bank PDFs, handwritten registers — into structured, trustworthy data. It's the wedge behind two products, not a party trick.",
              },
              {
                letter: "C",
                title: "One engineer, three products",
                body: "I architect and review while directing AI coding agents on implementation — a loop that runs several products at once without loosening rigor where it counts.",
              },
            ].map((card) => (
              <div
                key={card.letter}
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: 30,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  {card.letter}
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontFamily: SERIF,
                    fontWeight: 500,
                    fontSize: 21,
                    letterSpacing: "-.01em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    color: "var(--ink2)",
                    lineHeight: 1.6,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- Selected work */}
        <section
          id="work"
          className="akv-sec"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,52px)",
          }}
        >
          <SectionHeader
            num="02"
            title="Selected work"
            caption="3 products, in parallel"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {projects.map((p) => (
              <article
                key={p.name}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 13,
                  background: "var(--panel)",
                  overflow: "hidden",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {/* Main pane */}
                <div
                  className="akv-pmain"
                  style={{
                    flex: "2 1 340px",
                    padding: "28px clamp(22px,2.5vw,32px)",
                    borderRight: "1px solid var(--line2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 12,
                        color: "var(--accent)",
                        fontWeight: 600,
                      }}
                    >
                      {p.n}
                    </span>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: SERIF,
                        fontWeight: 500,
                        fontSize: 27,
                        letterSpacing: "-.01em",
                      }}
                    >
                      {p.name}
                    </h3>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener"
                      className="akv-link"
                      style={{
                        fontFamily: MONO,
                        fontSize: 12,
                        color: "var(--muted)",
                        textDecoration: "none",
                      }}
                    >
                      {p.urlLabel} &#8599;
                    </a>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        fontFamily: MONO,
                        fontSize: 11,
                        color: "var(--ink2)",
                        border: "1px solid var(--line)",
                        borderRadius: 20,
                        padding: "3px 10px",
                        marginLeft: "auto",
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: p.tone,
                        }}
                      />
                      {p.statusLabel}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: 17,
                      color: "var(--accent)",
                      marginBottom: 14,
                    }}
                  >
                    {p.tagline}
                  </div>
                  <p
                    style={{
                      margin: "0 0 18px",
                      fontSize: 14.5,
                      color: "var(--ink2)",
                      lineHeight: 1.6,
                      textWrap: "pretty",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: p.tone,
                        fontSize: 15,
                        lineHeight: 1.4,
                      }}
                    >
                      &#9671;
                    </span>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13.5,
                        color: "var(--ink)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 11,
                          color: "var(--muted)",
                          letterSpacing: ".06em",
                        }}
                      >
                        SIGNATURE&nbsp;&nbsp;
                      </span>
                      {p.signature}
                    </p>
                  </div>
                </div>

                {/* Rail pane */}
                <div
                  style={{
                    flex: "1 1 220px",
                    padding: "28px clamp(22px,2.5vw,28px)",
                    background:
                      "linear-gradient(180deg,var(--rail),transparent)",
                  }}
                >
                  <MonoLabel mb={9}>STACK</MonoLabel>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 18,
                    }}
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: MONO,
                          fontSize: 11.5,
                          color: "var(--ink2)",
                          background: "var(--raised)",
                          border: "1px solid var(--line)",
                          borderRadius: 6,
                          padding: "3px 8px",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <MonoLabel>ROLE</MonoLabel>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: "var(--ink)",
                      marginBottom: 18,
                    }}
                  >
                    {p.role}
                  </div>
                  <MonoLabel>FOCUS</MonoLabel>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 5,
                    }}
                  >
                    {p.focus.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: 13.5,
                          color: "var(--ink2)",
                          display: "flex",
                          gap: 8,
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- Experience */}
        <section
          id="experience"
          className="akv-sec"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,52px)",
          }}
        >
          <SectionHeader
            num="03"
            title="Experience"
            caption="12+ years, full-stack"
            mb={10}
          />
          <div>
            {experience.map((e) => (
              <article
                key={e.company}
                style={{
                  borderTop: "1px solid var(--line)",
                  padding: "clamp(24px,3vw,36px) 0",
                  display: "flex",
                  gap: "clamp(22px,3vw,44px)",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 240px" }}>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 11.5,
                      color: "var(--accent)",
                      marginBottom: 8,
                    }}
                  >
                    {e.period}
                  </div>
                  <h3
                    style={{
                      margin: "0 0 3px",
                      fontFamily: SERIF,
                      fontWeight: 500,
                      fontSize: 24,
                      letterSpacing: "-.01em",
                    }}
                  >
                    {e.company}
                  </h3>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--ink2)",
                      marginBottom: 18,
                    }}
                  >
                    {e.role}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                    }}
                  >
                    {e.metrics.map((m) => (
                      <div
                        key={m.l}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 9,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: SERIF,
                            fontSize: 20,
                            color: "var(--accent)",
                            minWidth: 72,
                          }}
                        >
                          {m.v}
                        </span>
                        <span
                          style={{ fontSize: 12.5, color: "var(--ink2)" }}
                        >
                          {m.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: "2 1 380px" }}>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 13,
                    }}
                  >
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          fontSize: 14.5,
                          color: "var(--ink2)",
                          lineHeight: 1.6,
                          display: "flex",
                          gap: 11,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontFamily: MONO,
                            fontSize: 12,
                            marginTop: 3,
                          }}
                        >
                          &#8250;
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            {/* Education row */}
            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 20,
                marginTop: 4,
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 10.5,
                  letterSpacing: ".1em",
                  color: "var(--muted)",
                }}
              >
                EDUCATION
              </span>
              <span
                style={{ fontFamily: SERIF, fontSize: 17, color: "var(--ink)" }}
              >
                B.Tech (Honors) + MS by Research, Computer Science
              </span>
              <span style={{ color: "var(--muted)" }}>·</span>
              <span style={{ fontSize: 14, color: "var(--ink2)" }}>
                IIIT-Hyderabad
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 11.5,
                  color: "var(--muted)",
                  marginLeft: "auto",
                }}
              >
                2007 – 2013
              </span>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ Stack */}
        <section
          id="stack"
          className="akv-sec"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,52px)",
          }}
        >
          <SectionHeader num="04" title="Stack" caption="tools of record" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 18,
            }}
          >
            {stackGroups.map((g) => (
              <div
                key={g.group}
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 18,
                    color: "var(--accent)",
                    marginBottom: 14,
                  }}
                >
                  {g.group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {g.items.map((it) => (
                    <span
                      key={it}
                      style={{
                        fontSize: 13,
                        color: "var(--ink2)",
                        background: "var(--raised)",
                        border: "1px solid var(--line)",
                        borderRadius: 7,
                        padding: "5px 10px",
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ About */}
        <section
          id="about"
          className="akv-sec"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,52px)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "clamp(24px,4vw,52px)",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: 14 }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: ".08em",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  05
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: SERIF,
                    fontWeight: 500,
                    fontSize: "clamp(24px,2.8vw,34px)",
                    letterSpacing: "-.01em",
                  }}
                >
                  About
                </h2>
              </div>
            </div>
            <div style={{ flex: "1 1 420px", maxWidth: "58ch" }}>
              <p
                style={{
                  margin: "0 0 18px",
                  fontFamily: SERIF,
                  fontSize: "clamp(19px,2vw,25px)",
                  color: "var(--ink)",
                  lineHeight: 1.5,
                  letterSpacing: "-.01em",
                  textWrap: "pretty",
                }}
              >
                I spent twelve years making shared UI trustworthy at scale —
                founding a company-wide design system at Informatica, then
                leading frontend platform work at Agoda — before turning that
                same obsession with correctness toward products of my own.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  color: "var(--ink2)",
                  lineHeight: 1.7,
                  textWrap: "pretty",
                }}
              >
                What I care about is consistent across all of it: systems where
                every number can be traced to a source, AI doing real
                infrastructural work instead of demos, and one engineer — with
                the right build loop — running several serious products without
                cutting the corners that matter. I review the parts that count
                and let the agents handle the rest.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- Contact */}
        <section
          id="contact"
          className="akv-sec"
          style={{
            borderTop: "1px solid var(--line)",
            background: "linear-gradient(180deg,var(--panel),var(--bg))",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "clamp(48px,6vw,84px) clamp(24px,4vw,52px)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "clamp(28px,4vw,60px)",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: "1 1 340px" }}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    letterSpacing: ".14em",
                    color: "var(--accent)",
                    marginBottom: 18,
                  }}
                >
                  06 — CONTACT
                </div>
                <h2
                  style={{
                    margin: "0 0 16px",
                    fontFamily: SERIF,
                    fontWeight: 500,
                    fontSize: "clamp(30px,3.8vw,50px)",
                    lineHeight: 1.06,
                    letterSpacing: "-.02em",
                    textWrap: "balance",
                  }}
                >
                  Let&apos;s build something that stays{" "}
                  <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                    honest.
                  </em>
                </h2>
                <p
                  style={{
                    margin: "0 0 26px",
                    fontSize: 15.5,
                    color: "var(--ink2)",
                    maxWidth: "42ch",
                    lineHeight: 1.6,
                  }}
                >
                  Open to full-stack and AI-systems work, collaborations, and
                  good conversations. Email is the fastest way to reach me.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href={`mailto:${email}`}
                    className="akv-pill"
                    style={{
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: "var(--on-accent)",
                      background: "var(--accent)",
                      textDecoration: "none",
                      padding: "13px 22px",
                      borderRadius: 9,
                    }}
                  >
                    {email}
                  </a>
                  <a
                    href={resumeHref}
                    download
                    className="akv-btn-outline-plain"
                    style={{
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: "var(--ink)",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "13px 22px",
                      borderRadius: 9,
                      border: "1px solid var(--line)",
                    }}
                  >
                    Download résumé &#8595;
                  </a>
                </div>
              </div>

              <div style={{ flex: "0 1 240px" }}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10.5,
                    letterSpacing: ".12em",
                    color: "var(--muted)",
                    marginBottom: 14,
                  }}
                >
                  ELSEWHERE
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      className="akv-link"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 14,
                        textDecoration: "none",
                        color: "var(--ink)",
                        padding: "11px 0",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <span style={{ fontSize: 15, fontWeight: 600 }}>
                        {s.label}
                      </span>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 12,
                          color: "var(--muted)",
                        }}
                      >
                        {s.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                marginTop: "clamp(40px,5vw,64px)",
                paddingTop: 22,
                borderTop: "1px solid var(--line)",
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                fontFamily: MONO,
                fontSize: 11.5,
                color: "var(--muted)",
              }}
            >
              <span>© {year} Akhil Vij · Delhi NCR, India</span>
              <span>akhilvij.com</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
