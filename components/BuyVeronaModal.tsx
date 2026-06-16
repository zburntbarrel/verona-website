"use client";

import { useState } from "react";
import { exchangeLinks, externalLinks } from "@/lib/site";

export default function BuyVeronaModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="primary-action" onClick={() => setOpen(true)}>
        Buy $VERONA
      </button>

      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="buy-verona-title">
          <div className="buy-modal">
            <div>
              <p className="eyebrow">Get $VERONA</p>
              <h2 id="buy-verona-title">Choose an exchange.</h2>
              <p>
                Pick a venue, create a Meta Account if needed, then return to stake when you are ready.
              </p>
            </div>
            <div className="exchange-grid">
              {exchangeLinks.map((exchange) => (
                <a key={exchange.label} href={exchange.href} target="_blank" rel="noreferrer">
                  {exchange.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={externalLinks.metaAccount} target="_blank" rel="noreferrer" className="secondary-action">
                Create Meta Account
              </a>
              <button type="button" className="secondary-action" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
