import React from 'react';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { Resource } from '@opentelemetry/resources';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
/*
const collectorOptions = {
  url: 'http://localhost:8080/traces/',
  headers: {
    'Content-Type': 'application/vnd.apache.thrift.binary',
    'Access-Control-Allow-Headers': '*'
  },
  concurrencyLimit: 10
};*/

const options = {
  url: 'http://localhost:8888/http://host.docker.internal:9411/api/v2/spans',
  serviceName: 'Front-end',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*'
  }
};
// Trace provider (Main aplication trace)
const provider = new WebTracerProvider({
  resource: new Resource({
    'service.name': 'Frontend'
  })
});

// Exporter (opentelemetry collector hidden behind bff proxy)
const exporter = new ZipkinExporter(options);

// Instrumentation configurations for frontend
const fetchInstrumentation = new FetchInstrumentation({});

fetchInstrumentation.setTracerProvider(provider);

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

provider.register({
  contextManager: new ZoneContextManager()
});

// Registering instrumentations
registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation(),
    new XMLHttpRequestInstrumentation()
  ]
});

export type TraceProviderProps = {
  children?: React.ReactNode;
};

const TraceProvider = ({ children }: TraceProviderProps) => {
  return <>{children}</>;
};

export default TraceProvider;
