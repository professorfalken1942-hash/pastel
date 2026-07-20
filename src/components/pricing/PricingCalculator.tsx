"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Minus, Plus, RotateCcw } from "lucide-react";

type PackageType = "makeup" | "hair" | "combo";

const PACKAGE_OPTIONS: Array<{
  value: PackageType;
  label: string;
  description: string;
  price: number;
}> = [
  {
    value: "combo",
    label: "Bridal Makeup + Hair",
    description: "Full wedding day beauty for the bride.",
    price: 450,
  },
  {
    value: "makeup",
    label: "Bridal Makeup",
    description: "Makeup-only service for the bride.",
    price: 250,
  },
  {
    value: "hair",
    label: "Bridal Hair",
    description: "Hair-only service for the bride.",
    price: 250,
  },
];

const PRICES = {
  additionalMakeup: 150,
  additionalHair: 150,
  trial: 175,
  bookingFee: 150,
  travelFee: 200,
  earlyStart: 150,
  additionalArtist: 150,
  touchUpHour: 100,
};

const MAX_CLIENTS = 20;
const MAX_TOUCH_UP_HOURS = 10;

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const clampNumber = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const sectionStyle: CSSProperties = {
  padding: "6rem 3rem",
  marginTop: "2rem",
  backgroundColor: "rgba(255, 212, 232, 0.45)",
};

const eyebrowStyle: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.65rem",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "var(--mink)",
  marginBottom: "1.5rem",
};

const bodyStyle: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.85rem",
  fontWeight: 300,
  lineHeight: 1.8,
  color: "var(--mink)",
};

const panelStyle: CSSProperties = {
  padding: "clamp(1.25rem, 3vw, 2rem)",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 18px 46px rgba(26, 26, 26, 0.08)",
  border: "1px solid rgba(26, 26, 26, 0.08)",
};

const controlButtonStyle: CSSProperties = {
  width: "2.5rem",
  height: "2.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(26, 26, 26, 0.16)",
  borderRadius: "999px",
  backgroundColor: "#ffffff",
  color: "var(--charcoal)",
  cursor: "pointer",
};

const numberInputStyle: CSSProperties = {
  width: "4.25rem",
  height: "2.5rem",
  border: "1px solid rgba(26, 26, 26, 0.16)",
  borderRadius: "999px",
  textAlign: "center",
  fontFamily: "var(--font-sans)",
  color: "var(--charcoal)",
};

const checkboxStyle: CSSProperties = {
  width: "1rem",
  height: "1rem",
  accentColor: "var(--pink)",
  flex: "0 0 auto",
};

export default function PricingCalculator() {
  const [packageType, setPackageType] = useState<PackageType>("combo");
  const [additionalMakeup, setAdditionalMakeup] = useState(0);
  const [additionalHair, setAdditionalHair] = useState(0);
  const [trial, setTrial] = useState(false);
  const [bookingFee, setBookingFee] = useState(true);
  const [travel, setTravel] = useState(false);
  const [earlyStart, setEarlyStart] = useState(false);
  const [additionalArtist, setAdditionalArtist] = useState(false);
  const [touchUpHours, setTouchUpHours] = useState(0);

  const selectedPackage = PACKAGE_OPTIONS.find((option) => option.value === packageType) ?? PACKAGE_OPTIONS[0];

  const estimatedGuestServices = additionalMakeup + additionalHair;
  const needsSecondArtist = estimatedGuestServices >= 6;

  const lineItems = useMemo(() => {
    const items = [
      {
        label: selectedPackage.label,
        detail: selectedPackage.description,
        amount: selectedPackage.price,
      },
      additionalMakeup > 0
        ? {
            label: "Additional makeup",
            detail: `${additionalMakeup} ${additionalMakeup === 1 ? "person" : "people"} at ${formatMoney(PRICES.additionalMakeup)}`,
            amount: additionalMakeup * PRICES.additionalMakeup,
          }
        : null,
      additionalHair > 0
        ? {
            label: "Additional hair",
            detail: `${additionalHair} ${additionalHair === 1 ? "person" : "people"} at ${formatMoney(PRICES.additionalHair)}`,
            amount: additionalHair * PRICES.additionalHair,
          }
        : null,
      trial
        ? {
            label: "Bridal trial",
            detail: "In-studio beauty preview",
            amount: PRICES.trial,
          }
        : null,
      bookingFee
        ? {
            label: "Booking fee",
            detail: "Applied to secure the date",
            amount: PRICES.bookingFee,
          }
        : null,
      travel
        ? {
            label: "Travel fee",
            detail: "Starting travel allowance",
            amount: PRICES.travelFee,
          }
        : null,
      earlyStart
        ? {
            label: "Early start fee",
            detail: "Before 8AM without lodging",
            amount: PRICES.earlyStart,
          }
        : null,
      additionalArtist
        ? {
            label: "Additional artist",
            detail: "Recommended for larger parties",
            amount: PRICES.additionalArtist,
          }
        : null,
      touchUpHours > 0
        ? {
            label: "Touch-up coverage",
            detail: `${touchUpHours} ${touchUpHours === 1 ? "hour" : "hours"} at ${formatMoney(PRICES.touchUpHour)}`,
            amount: touchUpHours * PRICES.touchUpHour,
          }
        : null,
    ];

    return items.filter((item): item is NonNullable<typeof item> => item !== null);
  }, [
    additionalArtist,
    additionalHair,
    additionalMakeup,
    bookingFee,
    earlyStart,
    selectedPackage,
    touchUpHours,
    travel,
    trial,
  ]);

  const total = lineItems.reduce((sum, item) => sum + item.amount, 0);

  const updateCount = (
    setter: (value: number) => void,
    value: number,
    max: number,
  ) => setter(clampNumber(Math.trunc(value) || 0, 0, max));

  const resetEstimate = () => {
    setPackageType("combo");
    setAdditionalMakeup(0);
    setAdditionalHair(0);
    setTrial(false);
    setBookingFee(true);
    setTravel(false);
    setEarlyStart(false);
    setAdditionalArtist(false);
    setTouchUpHours(0);
  };

  return (
    <section aria-labelledby="pricing-calculator-title" style={sectionStyle}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div style={{ maxWidth: "720px", marginBottom: "2.5rem" }}>
          <p style={eyebrowStyle}>Estimate</p>
          <h2
            id="pricing-calculator-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Pricing Calculator
          </h2>
          <p style={{ ...bodyStyle, fontSize: "0.95rem" }}>
            Build a starting quote for wedding beauty services. Final pricing is personalized based on your wedding vision,
            travel, guest count, timing, and styling needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          <div style={panelStyle}>
            <fieldset style={{ border: 0, display: "grid", gap: "1rem", marginBottom: "2rem" }}>
              <legend style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", marginBottom: "1rem" }}>
                Primary service
              </legend>
              <div
                role="radiogroup"
                aria-label="Primary service"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 12rem), 1fr))",
                  gap: "0.75rem",
                }}
              >
                {PACKAGE_OPTIONS.map((option) => {
                  const isSelected = option.value === packageType;

                  return (
                    <label
                      key={option.value}
                      style={{
                        display: "grid",
                        gap: "0.45rem",
                        padding: "1rem",
                        minHeight: "8rem",
                        border: isSelected ? "1px solid var(--charcoal)" : "1px solid rgba(26, 26, 26, 0.12)",
                        borderRadius: "8px",
                        backgroundColor: isSelected ? "var(--cream)" : "#ffffff",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="packageType"
                        value={option.value}
                        checked={isSelected}
                        onChange={() => setPackageType(option.value)}
                        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                      />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500 }}>
                        {option.label}
                      </span>
                      <span style={{ ...bodyStyle, fontSize: "0.72rem", lineHeight: 1.55 }}>{option.description}</span>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem" }}>
                        {formatMoney(option.price)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div style={{ display: "grid", gap: "1rem" }}>
              <NumberStepper
                label="Additional makeup clients"
                helper={`${formatMoney(PRICES.additionalMakeup)} per person`}
                value={additionalMakeup}
                max={MAX_CLIENTS}
                onChange={(value) => updateCount(setAdditionalMakeup, value, MAX_CLIENTS)}
              />
              <NumberStepper
                label="Additional hair clients"
                helper={`${formatMoney(PRICES.additionalHair)} per person`}
                value={additionalHair}
                max={MAX_CLIENTS}
                onChange={(value) => updateCount(setAdditionalHair, value, MAX_CLIENTS)}
              />
              <NumberStepper
                label="Touch-up hours"
                helper={`${formatMoney(PRICES.touchUpHour)} per hour`}
                value={touchUpHours}
                max={MAX_TOUCH_UP_HOURS}
                onChange={(value) => updateCount(setTouchUpHours, value, MAX_TOUCH_UP_HOURS)}
              />
            </div>

            {needsSecondArtist && !additionalArtist && (
              <p
                style={{
                  ...bodyStyle,
                  marginTop: "1rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "8px",
                  backgroundColor: "var(--cream)",
                  border: "1px solid rgba(26, 26, 26, 0.08)",
                }}
              >
                Larger parties often require an additional artist. Add that fee below if you expect six or more guest
                services.
              </p>
            )}

            <fieldset style={{ border: 0, marginTop: "2rem" }}>
              <legend style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", marginBottom: "1rem" }}>
                Add-ons
              </legend>
              <div style={{ display: "grid", gap: "0.8rem" }}>
                <CheckboxRow
                  checked={trial}
                  label={`Bridal trial - ${formatMoney(PRICES.trial)}`}
                  onChange={setTrial}
                />
                <CheckboxRow
                  checked={bookingFee}
                  label={`Booking fee - ${formatMoney(PRICES.bookingFee)}`}
                  onChange={setBookingFee}
                />
                <CheckboxRow
                  checked={travel}
                  label={`Travel fee - ${formatMoney(PRICES.travelFee)}`}
                  onChange={setTravel}
                />
                <CheckboxRow
                  checked={earlyStart}
                  label={`Early start fee - ${formatMoney(PRICES.earlyStart)}`}
                  onChange={setEarlyStart}
                />
                <CheckboxRow
                  checked={additionalArtist}
                  label={`Additional artist - ${formatMoney(PRICES.additionalArtist)}`}
                  onChange={setAdditionalArtist}
                />
              </div>
            </fieldset>
          </div>

          <aside
            aria-live="polite"
            style={{
              ...panelStyle,
              position: "sticky",
              top: "6rem",
            }}
          >
            <p style={eyebrowStyle}>Your estimate</p>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.7rem, 8vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                marginBottom: "1.5rem",
              }}
            >
              {formatMoney(total)}
            </h3>

            <div style={{ display: "grid", gap: "0.9rem", marginBottom: "1.5rem" }}>
              {lineItems.map((item) => (
                <div
                  key={`${item.label}-${item.amount}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) auto",
                    gap: "1rem",
                    alignItems: "baseline",
                    paddingBottom: "0.9rem",
                    borderBottom: "1px solid rgba(26, 26, 26, 0.08)",
                  }}
                >
                  <span>
                    <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.82rem" }}>
                      {item.label}
                    </span>
                    <span style={{ ...bodyStyle, display: "block", fontSize: "0.68rem", lineHeight: 1.5 }}>
                      {item.detail}
                    </span>
                  </span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem" }}>
                    {formatMoney(item.amount)}
                  </span>
                </div>
              ))}
            </div>

            <p style={bodyStyle}>
              This estimate is a planning guide. Custom projects, lodging, holidays, extensions, tattoo or body coverage,
              and day-of coordination are quoted separately.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}>
              <Link
                href="/book"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  backgroundColor: "var(--pink)",
                  padding: "0.9rem 1.2rem",
                  textDecoration: "none",
                }}
              >
                Book Consultation
              </Link>
              <button
                type="button"
                onClick={resetEstimate}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid rgba(26, 26, 26, 0.2)",
                  backgroundColor: "#ffffff",
                  color: "var(--charcoal)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "0.9rem 1rem",
                  cursor: "pointer",
                }}
              >
                <RotateCcw size={14} aria-hidden="true" />
                Reset
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function NumberStepper({
  label,
  helper,
  value,
  max,
  onChange,
}: {
  label: string;
  helper: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const id = label.toLowerCase().replaceAll(" ", "-");

  return (
    <label
      htmlFor={id}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) auto",
        gap: "1rem",
        alignItems: "center",
        padding: "1rem 0",
        borderTop: "1px solid rgba(26, 26, 26, 0.08)",
      }}
    >
      <span>
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 500 }}>
          {label}
        </span>
        <span style={{ ...bodyStyle, display: "block", fontSize: "0.72rem" }}>{helper}</span>
      </span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(value - 1)}
          disabled={value <= 0}
          style={{ ...controlButtonStyle, opacity: value <= 0 ? 0.45 : 1 }}
        >
          <Minus size={15} aria-hidden="true" />
        </button>
        <input
          id={id}
          type="number"
          min={0}
          max={max}
          inputMode="numeric"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          style={numberInputStyle}
        />
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          style={{ ...controlButtonStyle, opacity: value >= max ? 0.45 : 1 }}
        >
          <Plus size={15} aria-hidden="true" />
        </button>
      </span>
    </label>
  );
}

function CheckboxRow({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        padding: "0.85rem 1rem",
        border: "1px solid rgba(26, 26, 26, 0.1)",
        borderRadius: "8px",
        backgroundColor: checked ? "var(--cream)" : "#ffffff",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        style={checkboxStyle}
      />
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem" }}>{label}</span>
    </label>
  );
}
