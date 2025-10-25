import { Code2, DollarSign, ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function SupportJourney() {
  return (
    <Card className="bg-white shadow-sm border-0 pb-0">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Support My Web3 Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              👋 Hey there! I'm a{" "}
              <span className="font-semibold">front-end engineer</span> on an
              exciting journey to master
              <span className="font-semibold">
                {" "}
                blockchain and Web3 development
              </span>
              . Your contributions directly support my hands-on learning
              projects and help me create valuable content for the developer
              community.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Code2 className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Open Source Tools</p>
              <p className="text-sm text-gray-600">
                Building reusable components
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Learning Tutorials</p>
              <p className="text-sm text-gray-600">
                Documenting my experiences
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          Every transaction is{" "}
          <span className="font-semibold">transparently tracked on-chain</span>{" "}
          — become part of my learning story and help shape the future of web
          applications. Together, we're building a more decentralized and
          innovative web! 🚀
        </p>

        <div className="flex items-center gap-3">
          <span className="text-gray-600">Check out my work:</span>
          <a href="https://vik-portfolio-ecru.vercel.app/" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              <span>Portfolio</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
