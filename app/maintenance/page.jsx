
export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#f7f7f5",
        color: "#171717",
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "520px" }}>
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "4px",
            fontWeight: 700,
            marginBottom: "40px",
            color: "#777",
          }}
        >
          EAZY ROAD TYRES
        </div>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: 600,
            letterSpacing: "-1px",
            marginBottom: "20px",
          }}
        >
          Website Temporarily Unavailable
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            margin: 0,
          }}
        >
          This website is temporarily unavailable.
          Please contact the administrator for further information.
        </p>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#d6a747",
            margin: "32px auto",
          }}
        />

        <p
          style={{
            fontSize: "12px",
            letterSpacing: "1px",
            color: "#999",
          }}
        >
          WE WILL BE BACK
        </p>
      </div>
    </main>
  );
}
