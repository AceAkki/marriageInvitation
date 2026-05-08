import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    );
}

interface CardProps {
    emoji: string;
    hueA: number;
    hueB: number;
    i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {emoji}
            </motion.div>
        </motion.div>
    );
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 * 
Recommended Section Flow:
1. HERO / LANDING

names (large, elegant typography)
 date
Simple decorative element (monogram, floral accent, or ampersand)
Gentle scroll indicator


2. INVITATION MESSAGE

Formal invitation text ("Together with their families..." or personalized message)
Parents' names (optional, traditional)
Brief loving quote or verse (optional)


3. THE CELEBRATION
Split into clear cards/blocks:
CEREMONY

Date & Time
Venue name
Address
Small map visual or "Get Directions" link




7. TRAVEL & PARKING

Transportation options
Parking information
Shuttle service details (if applicable)




9. REGISTRY (Optional, tasteful)

Simple line: "Your presence is our present, but if you wish to celebrate with a gift..."
Links to registry sites
Or "In lieu of gifts, donations to [charity]"


10. GALLERY / OUR STORY (Optional)

3-6 photos of the couple
Brief "How we met" story
Engagement photos


11. CONTACT

coordinator contact (if you have one)
Or: "Questions? Reach us at..."
Email/phone for last-minute queries


12. FOOTER

"We can't wait to celebrate with you"
Couple's names or monogram date again
 */

const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];
