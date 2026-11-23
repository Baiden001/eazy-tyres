
export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f5f7",
        color: "#24292f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "560px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #d8dee4",
            borderRadius: "8px",
            padding: "32px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#6e7781",
              letterSpacing: "1px",
              marginBottom: "24px",
            }}
          >
            SERVICE STATUS
          </div>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: 600,
              margin: "0 0 12px",
            }}
          >
            Service Temporarily Unavailable
          </h1>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#57606a",
              margin: "0 0 28px",
            }}
          >
            The requested service is temporarily unavailable.
            Please try again later.
          </p>

          <div
            style={{
              borderTop: "1px solid #eaeef2",
              paddingTop: "20px",
              fontFamily: "monospace",
              fontSize: "12px",
              lineHeight: 2,
              color: "#6e7781",
            }}
          >
            <div>HTTP STATUS: 503</div>
            <div>STATUS: SERVICE UNAVAILABLE</div>
          </div>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#8c959f",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Please try again later.
        </p>
      </div>
    </main>
  );
}
